/**
 * Registration service abstraction.
 * Everything here is mock/in-memory for Phase 1.
 * TODO(backend): swap each function body for a Lovable Cloud server function.
 */

import { events, getEventBySlug, type SymposiumEvent } from "@/data/events";
import { mockRegistrations, type Registration, type TeamMember } from "@/data/registrations";
import { siteSettings } from "@/data/site";

export type ParticipantDraft = {
  name: string;
  email: string;
  phone: string;
  college: string;
  department: string;
  year: string;
};

export type RegistrationDraft = {
  participant: ParticipantDraft;
  teamName: string;
  members: TeamMember[];
  eventSlugs: string[];
};

export type SelectionIssue = { code: string; message: string };

/**
 * Business rules for event selection:
 * - at least one technical event is mandatory
 * - plus EITHER one non-technical event OR one workshop, never both
 */
export function validateSelection(slugs: string[]): SelectionIssue[] {
  const selected = slugs.map(getEventBySlug).filter(Boolean) as SymposiumEvent[];
  const technical = selected.filter((e) => e.category === "technical");
  const nonTechnical = selected.filter((e) => e.category === "non-technical");
  const workshops = selected.filter((e) => e.category === "workshop");
  const issues: SelectionIssue[] = [];

  if (technical.length < 1) {
    issues.push({ code: "technical-required", message: "Select at least one technical event." });
  }
  if (nonTechnical.length > 0 && workshops.length > 0) {
    issues.push({
      code: "mutually-exclusive",
      message: "Choose either a non-technical event or a workshop, not both.",
    });
  }
  if (nonTechnical.length > 1) {
    issues.push({ code: "one-non-technical", message: "Only one non-technical event can be selected." });
  }
  if (workshops.length > 1) {
    issues.push({ code: "one-workshop", message: "Only one workshop can be selected." });
  }
  return issues;
}

export function calculateFee(memberCount: number) {
  const participants = Math.max(1, memberCount);
  return {
    participants,
    perParticipant: siteSettings.feePerParticipant,
    total: participants * siteSettings.feePerParticipant,
  };
}

const DRAFT_KEY = "evitron:registration-draft";

export const emptyDraft: RegistrationDraft = {
  participant: { name: "", email: "", phone: "", college: "", department: "", year: "" },
  teamName: "",
  members: [],
  eventSlugs: [],
};

export function saveDraft(draft: RegistrationDraft) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

export function loadDraft(): RegistrationDraft | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(DRAFT_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as RegistrationDraft;
  } catch {
    return null;
  }
}

export function clearDraft() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(DRAFT_KEY);
}

export function generateRegistrationId() {
  const n = 1000 + mockRegistrations.length + Math.floor(Math.random() * 900);
  return `EVT-2K26-${n}`;
}

/** TODO(backend): persist to database and return the stored row. */
export async function submitRegistration(draft: RegistrationDraft): Promise<Registration> {
  const memberCount = draft.members.length + 1;
  const { total } = calculateFee(memberCount);
  return {
    id: generateRegistrationId(),
    createdAt: new Date().toISOString(),
    leader: {
      name: draft.participant.name,
      email: draft.participant.email,
      phone: draft.participant.phone,
      year: draft.participant.year,
      department: draft.participant.department,
    },
    college: draft.participant.college,
    teamName: draft.teamName || "Solo",
    members: draft.members,
    eventSlugs: draft.eventSlugs,
    amount: total,
    paymentStatus: "paid",
    paymentRef: `pay_MOCK_${Math.random().toString(16).slice(2, 8)}`,
    checkedIn: false,
  };
}

/** TODO(backend): server-side query with pagination and filters. */
export async function listRegistrations(): Promise<Registration[]> {
  return mockRegistrations;
}

export const allEvents = events;
