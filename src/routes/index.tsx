import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, IndianRupee, Trophy, UtensilsCrossed, Cpu, Wrench, Gamepad2, Sparkles, ChevronRight } from "lucide-react";

import { Countdown } from "@/components/site/Countdown";
import { EventCard } from "@/components/site/EventCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { categoryMeta, eventsByCategory, type EventCategory } from "@/data/events";
import { importantDates, siteSettings } from "@/data/site";
import { money } from "@/lib/format";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EVITRON 2K26 — National Level Technical Symposium | ECE, MEC" },
      {
        name: "description",
        content:
          "EVITRON 2K26 on 08 October 2026: paper presentation, project expo, line follower race, VLSI/Embedded/LabVIEW workshops and non-technical contests.",
      },
    ],
  }),
  component: Home,
});

const categoryIcon: Record<EventCategory, typeof Cpu> = {
  technical: Cpu,
  workshop: Wrench,
  "non-technical": Gamepad2,
};

function Home() {
  const categories: EventCategory[] = ["technical", "workshop", "non-technical"];

  return (
    <SiteLayout>
      {/* High-Impact Cyberpunk Hero Section */}
      <section className="relative overflow-hidden bg-[#030712] py-20 lg:py-28 text-white border-b border-slate-800/80">
        {/* Animated Multi-Color Ambient Spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-80">
          <div className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] bg-cyan-500/25 rounded-full blur-[140px]" />
          <div className="absolute top-[10%] right-[15%] w-[450px] h-[450px] bg-purple-600/30 rounded-full blur-[130px]" />
          <div className="absolute top-[25%] left-[35%] w-[350px] h-[350px] bg-blue-600/25 rounded-full blur-[100px]" />
        </div>

        {/* Dynamic Circuit Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b35_1px,transparent_1px),linear-gradient(to_bottom,#1e293b35_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        {/* Top Accent Horizon Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 text-center">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/50 px-4 py-1.5 text-xs text-cyan-300 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)] mb-6">
            <Sparkles className="size-3.5 text-cyan-400 animate-pulse" />
            <span className="font-semibold tracking-wide uppercase">{siteSettings.college}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto tracking-wide font-light">
            {siteSettings.accreditation}
          </p>

          <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            {siteSettings.department} <span className="text-purple-400">• {siteSettings.association}</span>
          </p>

          {/* Large Title Logo with Concentric Glowing Aura */}
          <div className="relative my-8 py-2 flex justify-center items-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-2xl pointer-events-none" />
            
            <img
              src="/logo.png"
              alt="EVITRON 2K26"
              className="relative z-10 h-36 sm:h-52 md:h-64 w-auto object-contain filter drop-shadow-[0_0_45px_rgba(6,182,212,0.75)] hover:drop-shadow-[0_0_65px_rgba(168,85,247,0.85)] transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Subheading */}
          <p className="font-display text-sm sm:text-lg tracking-[0.35em] font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 uppercase drop-shadow">
            A National Level Technical Symposium
          </p>

          {/* Glassmorphic Countdown Box */}
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 font-medium">
              Countdown to Symposium Day
            </p>
            <div className="mt-4">
              <Countdown target={siteSettings.symposiumDate} />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="h-12 px-8 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-base rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105"
            >
              <Link to="/register" className="flex items-center gap-2">
                Register for {money(siteSettings.feePerParticipant)}
                <ChevronRight className="size-4" />
              </Link>
            </Button>

            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="h-12 px-8 border-slate-700 bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:border-slate-500 text-base rounded-xl backdrop-blur-md transition-all duration-300"
            >
              <Link to="/events">Explore Events</Link>
            </Button>
          </div>

          {/* Perks & Features */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs">
            <Badge variant="secondary" className="px-3.5 py-1.5 bg-slate-900/90 text-slate-300 border border-slate-800 gap-1.5 rounded-full shadow-inner">
              <UtensilsCrossed className="size-3.5 text-cyan-400" /> {siteSettings.perksNote}
            </Badge>
            <Badge variant="secondary" className="px-3.5 py-1.5 bg-slate-900/90 text-slate-300 border border-slate-800 gap-1.5 rounded-full shadow-inner">
              <Trophy className="size-3.5 text-amber-400" /> Exciting Cash Prizes
            </Badge>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          eyebrow="About the symposium"
          title="One day, three tracks, a full campus of electronics"
          description="EVITRON 2K26 is the national level technical symposium of the Department of Electronics and Communication Engineering at Mahendra Engineering College, hosted with VELOCITY. It brings together paper presentations, live project demos, an autonomous bot race, industry-grade workshops and fast-paced non-technical contests."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { k: "10", v: "Events across three tracks" },
            { k: "3", v: "Hands-on industry workshops" },
            { k: money(siteSettings.feePerParticipant), v: "Per participant, all inclusive" },
          ].map((item) => (
            <div key={item.v} className="p-6 border border-slate-800/80 bg-slate-900/40 backdrop-blur-md rounded-2xl shadow-lg hover:border-cyan-500/30 transition-all">
              <p className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">{item.k}</p>
              <p className="mt-2 text-sm text-slate-400">{item.v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-slate-800/80 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionHeading eyebrow="Tracks" title="Pick your track" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((cat) => {
              const Icon = categoryIcon[cat];
              const list = eventsByCategory(cat);
              return (
                <div key={cat} className="flex flex-col p-6 border border-slate-800/80 bg-slate-900/50 rounded-2xl hover:border-cyan-500/40 transition-all shadow-md">
                  <Icon className="size-7 shrink-0 text-cyan-400" />
                  <h3 className="mt-4 font-display text-xl font-bold text-slate-100">
                    {categoryMeta[cat].label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{categoryMeta[cat].blurb}</p>
                  <ul className="mt-5 space-y-2 text-sm text-slate-300">
                    {list.map((e) => (
                      <li key={e.id} className="flex items-baseline gap-2">
                        <span className="size-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span className="min-w-0">
                          {e.title}
                          <span className="text-slate-500"> — {e.subtitle}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="ghost" size="sm" className="mt-6 self-start px-0 text-cyan-400 hover:text-cyan-300">
                    <Link to="/events">View {list.length} events →</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical previews */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          eyebrow="Technical events"
          title="Where the marks are won"
          description="Every technical event carries cash prizes and merit certificates."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {eventsByCategory("technical").map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section className="border-y border-slate-800/80 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <SectionHeading
            eyebrow="Workshops"
            title="Hands-on with industry tooling"
            description="Limited seats per workshop, allotted first come first served."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {eventsByCategory("workshop").map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* Dates + Fee */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading eyebrow="Important dates" title="Mark the calendar" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {importantDates.map((d) => (
            <div key={d.id} className="p-6 border border-slate-800/80 bg-slate-900/40 rounded-2xl">
              <CalendarDays className="size-6 shrink-0 text-cyan-400" />
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400">{d.label}</p>
              <p className="mt-1 font-display text-2xl font-bold text-slate-100">
                {new Date(d.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </p>
              <p className="text-sm text-cyan-400 mt-1">{d.weekday}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="p-6 border border-slate-800/80 bg-slate-900/40 rounded-2xl">
            <IndianRupee className="size-6 shrink-0 text-cyan-400" />
            <h3 className="mt-3 font-display text-lg font-bold text-slate-100">Registration fee</h3>
            <p className="mt-2 text-sm text-slate-400">
              {money(siteSettings.feePerParticipant)} per participant. Teams pay for all members in a single
              transaction.
            </p>
          </div>
          <div className="p-6 border border-slate-800/80 bg-slate-900/40 rounded-2xl">
            <UtensilsCrossed className="size-6 shrink-0 text-cyan-400" />
            <h3 className="mt-3 font-display text-lg font-bold text-slate-100">What's included</h3>
            <p className="mt-2 text-sm text-slate-400">
              {siteSettings.perksNote} Every participant also receives an e-certificate.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden border-t border-slate-800/80 bg-slate-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-600/10 via-purple-600/10 to-transparent pointer-events-none" aria-hidden />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-display text-3xl font-extrabold sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-100 to-purple-300">
            CREATE. INNOVATE. ELEVATE.
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Registration closes 01/10/2026. Paper abstracts close 27/09/2026.
          </p>
          <Button asChild size="lg" className="mt-8 h-12 px-10 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold rounded-xl shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <Link to="/register">Register Now</Link>
          </Button>
        </div>
      </section>
    </SiteLayout>
  );
}