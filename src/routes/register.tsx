import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { AlertCircle, ArrowRight, ArrowLeft, CheckCircle2, UserCheck, Users } from "lucide-react";

import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { events } from "@/data/events";
import { siteSettings } from "@/data/site";
import { money } from "@/lib/format";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
});

// Validation Schema
const memberSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Must be a valid 10-digit phone number"),
  year: z.string().min(1, "Year is required"),
  department: z.string().min(2, "Department is required"),
});

const registrationSchema = z.object({
  teamName: z.string().optional(),
  leader: memberSchema,
  members: z.array(memberSchema),
  selectedEvents: z.array(z.string()).min(1, "Select at least 1 event or workshop"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

function RegisterPage() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  const {
    register,
    control,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      teamName: "",
      leader: { name: "", email: "", phone: "", year: "", department: "" },
      members: [],
      selectedEvents: [],
    },
    mode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "members",
  });

  const watchSelectedEvents = watch("selectedEvents") || [];

  // Categorize selected events
  const selectedTech = watchSelectedEvents.filter(
    (id) => events.find((e) => e.id === id)?.category === "technical"
  );
  const selectedWorkshops = watchSelectedEvents.filter(
    (id) => events.find((e) => e.id === id)?.category === "workshop"
  );
  const selectedNonTech = watchSelectedEvents.filter(
    (id) => events.find((e) => e.id === id)?.category === "non-technical"
  );

  const hasWorkshop = selectedWorkshops.length > 0;
  const hasTech = selectedTech.length > 0;
  const hasNonTech = selectedNonTech.length > 0;

  // Step 2 Validation: Must have Workshop OR Technical (Only Non-Tech is strictly invalid)
  const isStep2Valid = hasWorkshop || hasTech;

  // Toggle & Auto-Deselect Handler
  const handleEventToggle = (eventId: string) => {
    const clickedEvent = events.find((e) => e.id === eventId);
    if (!clickedEvent) return;

    const isCurrentlySelected = watchSelectedEvents.includes(eventId);

    if (isCurrentlySelected) {
      // Uncheck current event
      setValue(
        "selectedEvents",
        watchSelectedEvents.filter((id) => id !== eventId),
        { shouldValidate: true }
      );
      return;
    }

    // Auto-swap behavior depending on category
    if (clickedEvent.category === "workshop") {
      // Workshop selected -> Auto-deselect ALL Tech and Non-Tech events
      setValue("selectedEvents", [eventId], { shouldValidate: true });
    } else if (clickedEvent.category === "technical") {
      // Tech selected -> Clear workshops, replace old tech event, keep existing non-tech event if any
      const existingNonTech = watchSelectedEvents.find(
        (id) => events.find((e) => e.id === id)?.category === "non-technical"
      );
      const updated = [eventId, existingNonTech].filter(Boolean) as string[];
      setValue("selectedEvents", updated, { shouldValidate: true });
    } else if (clickedEvent.category === "non-technical") {
      // Non-tech selected -> Clear workshops, replace old non-tech event, keep existing tech event if any
      const existingTech = watchSelectedEvents.find(
        (id) => events.find((e) => e.id === id)?.category === "technical"
      );
      const updated = [existingTech, eventId].filter(Boolean) as string[];
      setValue("selectedEvents", updated, { shouldValidate: true });
    }
  };

  const handleNextStep1 = async () => {
    const isValid = await trigger("leader");
    if (isValid) setStep(2);
  };

  const handleNextStep2 = async () => {
    const isValid = await trigger("selectedEvents");
    if (!isValid || !isStep2Valid) return;

    if (hasWorkshop) {
      // Solo path: clear any team members and jump straight to summary
      setValue("members", []);
      setValue("teamName", "");
      setStep(4);
    } else if (hasTech) {
      // Team path: enforce exactly 2 additional team members (3 total including leader)
      if (fields.length !== 2) {
        // Reset members to exactly 2 empty slots
        remove();
        append([
          { name: "", email: "", phone: "", year: "", department: "" },
          { name: "", email: "", phone: "", year: "", department: "" },
        ]);
      }
      setStep(3);
    }
  };

  const handleNextStep3 = async () => {
    const isValid = await trigger(["teamName", "members"]);
    if (isValid && fields.length === 2) {
      setStep(4);
    }
  };

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Registration Submitted:", data);
    alert("Registration successfully submitted!");
  };

  const totalParticipants = 1 + fields.length;
  const totalAmount = totalParticipants * siteSettings.feePerParticipant;

  return (
    <SiteLayout>
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            REGISTRATION
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            {money(siteSettings.feePerParticipant)} per participant.
          </p>
        </div>

        {/* Stepper Header */}
        <div className="mb-10 grid grid-cols-4 gap-2 text-center text-xs font-semibold uppercase tracking-wider">
          {[
            "1. Participant",
            "2. Events",
            hasWorkshop ? "3. Team (Skipped)" : "3. Team",
            "4. Summary",
          ].map((label, idx) => {
            const stepNum = idx + 1;
            const isActive = step === stepNum;
            const isDone = step > stepNum || (step === 4 && stepNum === 3 && hasWorkshop);
            return (
              <div
                key={label}
                className={`py-2 border-b-2 transition-all ${
                  isActive
                    ? "border-cyan-400 text-cyan-400"
                    : isDone
                    ? "border-slate-600 text-slate-300"
                    : "border-slate-800 text-slate-600"
                }`}
              >
                {label}
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* STEP 1: Participant / Team Leader Details */}
          {step === 1 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-4">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <UserCheck className="size-5 text-cyan-400" /> Participant / Team Leader Details
              </h2>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-slate-200">Full Name *</Label>
                  <Input {...register("leader.name")} placeholder="John Doe" className="mt-1 bg-slate-950 border-slate-800" />
                  {errors.leader?.name && <p className="mt-1 text-xs text-red-400">{errors.leader.name.message}</p>}
                </div>

                <div>
                  <Label className="text-slate-200">Email Address *</Label>
                  <Input {...register("leader.email")} type="email" placeholder="john@example.com" className="mt-1 bg-slate-950 border-slate-800" />
                  {errors.leader?.email && <p className="mt-1 text-xs text-red-400">{errors.leader.email.message}</p>}
                </div>

                <div>
                  <Label className="text-slate-200">Phone Number (10 Digits) *</Label>
                  <Input {...register("leader.phone")} placeholder="9876543210" className="mt-1 bg-slate-950 border-slate-800" />
                  {errors.leader?.phone && <p className="mt-1 text-xs text-red-400">{errors.leader.phone.message}</p>}
                </div>

                <div>
                  <Label className="text-slate-200">Year *</Label>
                  <Input {...register("leader.year")} placeholder="e.g. III Year" className="mt-1 bg-slate-950 border-slate-800" />
                  {errors.leader?.year && <p className="mt-1 text-xs text-red-400">{errors.leader.year.message}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Label className="text-slate-200">Department *</Label>
                  <Input {...register("leader.department")} placeholder="e.g. ECE" className="mt-1 bg-slate-950 border-slate-800" />
                  {errors.leader?.department && <p className="mt-1 text-xs text-red-400">{errors.leader.department.message}</p>}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <Button type="button" onClick={handleNextStep1} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold gap-2">
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Event Selection */}
          {step === 2 && (
            <div className="space-y-6">
              {/* Rules Banner */}
              <div className="flex gap-3 rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-amber-300">
                <AlertCircle className="size-5 shrink-0 text-amber-400" />
                <div className="space-y-1">
                  <p className="font-semibold text-amber-200">Event Rules & Guidelines:</p>
                  <ul className="list-disc pl-4 space-y-0.5 text-amber-300/90">
                    <li>Selecting a <strong>Workshop</strong> registers you <strong>SOLO</strong> and clears all other event tracks.</li>
                    <li>Technical events require a <strong>strict team of 3 members</strong> (Leader + 2 Members).</li>
                    <li>You can pick <strong>1 Technical Event</strong> + optional <strong>1 Non-Technical Event</strong>.</li>
                    <li><strong>Only Non-Technical</strong> selection is strictly NOT allowed.</li>
                  </ul>
                </div>
              </div>

              {/* Technical Events */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
                <h3 className="font-display font-bold text-white text-lg">Technical Events</h3>
                <p className="text-xs text-slate-400 mb-4">Selecting a new technical event will replace your previous choice.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {events
                    .filter((e) => e.category === "technical")
                    .map((item) => {
                      const checked = watchSelectedEvents.includes(item.id);
                      return (
                        <label
                          key={item.id}
                          onClick={() => handleEventToggle(item.id)}
                          className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                            checked
                              ? "border-cyan-500 bg-cyan-950/30"
                              : "border-slate-800 bg-slate-950/70 hover:border-slate-700"
                          }`}
                        >
                          <Checkbox checked={checked} onCheckedChange={() => {}} className="mt-1" />
                          <div>
                            <p className="font-semibold text-slate-100 text-sm">{item.title}</p>
                            <p className="text-xs text-slate-400">{item.subtitle}</p>
                          </div>
                        </label>
                      );
                    })}
                </div>
              </div>

              {/* Workshops */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
                <h3 className="font-display font-bold text-white text-lg">Workshops (Solo Participation)</h3>
                <p className="text-xs text-slate-400 mb-4">Selecting a workshop auto-deselects all other technical & non-technical events.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {events
                    .filter((e) => e.category === "workshop")
                    .map((item) => {
                      const checked = watchSelectedEvents.includes(item.id);
                      return (
                        <label
                          key={item.id}
                          onClick={() => handleEventToggle(item.id)}
                          className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                            checked
                              ? "border-purple-500 bg-purple-950/30"
                              : "border-slate-800 bg-slate-950/70 hover:border-slate-700"
                          }`}
                        >
                          <Checkbox checked={checked} onCheckedChange={() => {}} className="mt-1" />
                          <div>
                            <p className="font-semibold text-slate-100 text-sm">{item.title}</p>
                            <p className="text-xs text-slate-400">{item.subtitle}</p>
                          </div>
                        </label>
                      );
                    })}
                </div>
              </div>

              {/* Non-Technical Events */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md">
                <h3 className="font-display font-bold text-white text-lg">Non-Technical Events</h3>
                <p className="text-xs text-slate-400 mb-4">Can only be selected alongside a Technical event.</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {events
                    .filter((e) => e.category === "non-technical")
                    .map((item) => {
                      const checked = watchSelectedEvents.includes(item.id);
                      return (
                        <label
                          key={item.id}
                          onClick={() => handleEventToggle(item.id)}
                          className={`flex items-start gap-3 p-4 rounded-xl border transition-all cursor-pointer ${
                            checked
                              ? "border-cyan-500 bg-cyan-950/30"
                              : "border-slate-800 bg-slate-950/70 hover:border-slate-700"
                          }`}
                        >
                          <Checkbox checked={checked} onCheckedChange={() => {}} className="mt-1" />
                          <div>
                            <p className="font-semibold text-slate-100 text-sm">{item.title}</p>
                            <p className="text-xs text-slate-400">{item.subtitle}</p>
                          </div>
                        </label>
                      );
                    })}
                </div>
              </div>

              {/* Validation Feedback Warnings */}
              {hasNonTech && !hasTech && (
                <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-3 text-xs text-red-300">
                  ⚠️ Non-Technical events cannot be selected alone. You must select a Technical Event or a Workshop to proceed.
                </div>
              )}

              {errors.selectedEvents && (
                <p className="text-xs text-red-400">{errors.selectedEvents.message}</p>
              )}

              <div className="pt-4 flex justify-between items-center">
                <Button type="button" variant="outline" onClick={() => setStep(1)} className="border-slate-700 text-slate-300">
                  <ArrowLeft className="size-4 mr-2" /> Back
                </Button>
                <Button
                  type="button"
                  disabled={!isStep2Valid}
                  onClick={handleNextStep2}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Team Members (Mandatory 3 Members Total for Technical Events) */}
          {step === 3 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-6">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Users className="size-5 text-cyan-400" /> Team Details (Strictly 3 Members Total)
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Technical events strictly require 3 participants (1 Team Leader + 2 Team Members).
                </p>
              </div>

              <div>
                <Label className="text-slate-200">Team Name *</Label>
                <Input {...register("teamName")} placeholder="Enter your team name" className="mt-1 bg-slate-950 border-slate-800" />
              </div>

              {fields.map((field, index) => (
                <div key={field.id} className="relative p-5 rounded-xl border border-slate-800 bg-slate-950/70 space-y-4">
                  <div className="border-b border-slate-800 pb-2">
                    <h3 className="font-semibold text-cyan-400 text-sm">Team Member {index + 2} (Required)</h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label className="text-slate-200 text-xs">Full Name *</Label>
                      <Input {...register(`members.${index}.name`)} placeholder="Member Name" className="mt-1 bg-slate-900 border-slate-800" />
                      {errors.members?.[index]?.name && <p className="mt-1 text-xs text-red-400">{errors.members[index]?.name?.message}</p>}
                    </div>

                    <div>
                      <Label className="text-slate-200 text-xs">Email Address *</Label>
                      <Input {...register(`members.${index}.email`)} type="email" placeholder="member@example.com" className="mt-1 bg-slate-900 border-slate-800" />
                      {errors.members?.[index]?.email && <p className="mt-1 text-xs text-red-400">{errors.members[index]?.email?.message}</p>}
                    </div>

                    <div>
                      <Label className="text-slate-200 text-xs">Phone Number *</Label>
                      <Input {...register(`members.${index}.phone`)} placeholder="9876543210" className="mt-1 bg-slate-900 border-slate-800" />
                      {errors.members?.[index]?.phone && <p className="mt-1 text-xs text-red-400">{errors.members[index]?.phone?.message}</p>}
                    </div>

                    <div>
                      <Label className="text-slate-200 text-xs">Year *</Label>
                      <Input {...register(`members.${index}.year`)} placeholder="e.g. III Year" className="mt-1 bg-slate-900 border-slate-800" />
                      {errors.members?.[index]?.year && <p className="mt-1 text-xs text-red-400">{errors.members[index]?.year?.message}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <Label className="text-slate-200 text-xs">Department *</Label>
                      <Input {...register(`members.${index}.department`)} placeholder="e.g. ECE" className="mt-1 bg-slate-900 border-slate-800" />
                      {errors.members?.[index]?.department && <p className="mt-1 text-xs text-red-400">{errors.members[index]?.department?.message}</p>}
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4 flex justify-between">
                <Button type="button" variant="outline" onClick={() => setStep(2)} className="border-slate-700 text-slate-300">
                  <ArrowLeft className="size-4 mr-2" /> Back
                </Button>
                <Button type="button" onClick={handleNextStep3} className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold gap-2">
                  Continue <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          )}

          {/* STEP 4: Summary */}
          {step === 4 && (
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-md space-y-6">
              <h2 className="text-xl font-bold text-white">Registration Summary</h2>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <p className="text-xs font-semibold uppercase text-cyan-400">Team Leader / Participant</p>
                  <p className="font-bold text-white">{watch("leader.name")}</p>
                  <p className="text-xs text-slate-400">{watch("leader.email")} • {watch("leader.phone")}</p>
                  <p className="text-xs text-slate-400">{watch("leader.department")} - {watch("leader.year")}</p>
                </div>

                {fields.length > 0 ? (
                  <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                    <p className="text-xs font-semibold uppercase text-cyan-400">
                      Team Members ({fields.length + 1} Total) {watch("teamName") && `— ${watch("teamName")}`}
                    </p>
                    {watch("members")?.map((m, idx) => (
                      <div key={idx} className="border-t border-slate-800/60 pt-2 text-xs">
                        <p className="font-semibold text-slate-200">Member {idx + 2}: {m.name}</p>
                        <p className="text-slate-400">{m.email} • {m.phone}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400">
                    Type: <span className="text-cyan-400 font-semibold">Solo Registration (Workshop Track)</span>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <p className="text-xs font-semibold uppercase text-cyan-400">Selected Events & Workshops</p>
                  <ul className="list-disc pl-4 space-y-1 text-slate-200">
                    {watchSelectedEvents.map((id) => {
                      const ev = events.find((e) => e.id === id);
                      return <li key={id}>{ev?.title} ({ev?.category})</li>;
                    })}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex justify-between items-center">
                  <div>
                    <p className="text-xs text-slate-400">Total Payable ({totalParticipants} Participant{totalParticipants > 1 ? "s" : ""} × {money(siteSettings.feePerParticipant)})</p>
                    <p className="text-2xl font-bold text-cyan-400">{money(totalAmount)}</p>
                  </div>
                  <CheckCircle2 className="size-8 text-cyan-400" />
                </div>
              </div>

              <div className="pt-4 flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(hasWorkshop ? 2 : 3)}
                  className="border-slate-700 text-slate-300"
                >
                  <ArrowLeft className="size-4 mr-2" /> Back
                </Button>
                <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-8">
                  Complete Registration
                </Button>
              </div>
            </div>
          )}
        </form>
      </div>
    </SiteLayout>
  );
}