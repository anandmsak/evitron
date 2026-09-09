// src/services/appDataStore.ts
import { useSyncExternalStore } from "react";
import { events as seedEvents, type EventCategory, type SymposiumEvent } from "@/data/events";
import { faqItems as seedFaq, type FaqItem } from "@/data/faq";
import {
  coordinators as seedCoordinators,
  importantDates as seedDates,
  siteSettings as seedSettings,
  type Coordinator,
  type ImportantDate,
  type SiteSettings,
} from "@/data/site";
import { paymentSettings as seedPayment } from "@/services/paymentService";

const STORAGE_KEY = "evitron:app_store_v2";

export type AppDataState = {
  events: SymposiumEvent[];
  coordinators: Coordinator[];
  dates: ImportantDate[];
  faq: FaqItem[];
  settings: SiteSettings;
  payment: typeof seedPayment;
};

const defaultData: AppDataState = {
  events: seedEvents,
  coordinators: seedCoordinators,
  dates: seedDates,
  faq: seedFaq,
  settings: seedSettings,
  payment: seedPayment,
};

function loadState(): AppDataState {
  if (typeof window === "undefined") return defaultData;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const parsed = JSON.parse(raw) as Partial<AppDataState>;
    return {
      events: parsed.events || seedEvents,
      coordinators: parsed.coordinators || seedCoordinators,
      dates: parsed.dates || seedDates,
      faq: parsed.faq || seedFaq,
      settings: { ...seedSettings, ...(parsed.settings || {}) },
      payment: { ...seedPayment, ...(parsed.payment || {}) },
    };
  } catch {
    return defaultData;
  }
}

let currentState: AppDataState = loadState();
const listeners = new Set<() => void>();

function saveAndNotify() {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
    } catch {
      // ignore storage quota issues
    }
  }
  listeners.forEach((listener) => listener());
}

export const appDataStore = {
  getState(): AppDataState {
    return currentState;
  },

  subscribe(listener: () => void): () => void {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  updateEvent(id: string, patch: Partial<SymposiumEvent>) {
    currentState = {
      ...currentState,
      events: currentState.events.map((e) => (e.id === id ? { ...e, ...patch } : e)),
    };
    saveAndNotify();
  },

  addEvent(event: SymposiumEvent) {
    currentState = {
      ...currentState,
      events: [...currentState.events, event],
    };
    saveAndNotify();
  },

  removeEvent(id: string) {
    currentState = {
      ...currentState,
      events: currentState.events.filter((e) => e.id !== id),
    };
    saveAndNotify();
  },

  addCoordinator(coordinator: Coordinator) {
    currentState = {
      ...currentState,
      coordinators: [...currentState.coordinators, coordinator],
    };
    saveAndNotify();
  },

  updateCoordinator(id: string, patch: Partial<Coordinator>) {
    currentState = {
      ...currentState,
      coordinators: currentState.coordinators.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    };
    saveAndNotify();
  },

  removeCoordinator(id: string) {
    currentState = {
      ...currentState,
      events: currentState.events.map((e) => ({
        ...e,
        coordinatorIds: e.coordinatorIds.filter((cid) => cid !== id),
      })),
      coordinators: currentState.coordinators.filter((c) => c.id !== id),
    };
    saveAndNotify();
  },

  assignCoordinator(eventId: string, coordinatorId: string) {
    currentState = {
      ...currentState,
      events: currentState.events.map((e) =>
        e.id === eventId && !e.coordinatorIds.includes(coordinatorId)
          ? { ...e, coordinatorIds: [...e.coordinatorIds, coordinatorId] }
          : e,
      ),
    };
    saveAndNotify();
  },

  unassignCoordinator(eventId: string, coordinatorId: string) {
    currentState = {
      ...currentState,
      events: currentState.events.map((e) =>
        e.id === eventId
          ? { ...e, coordinatorIds: e.coordinatorIds.filter((cid) => cid !== coordinatorId) }
          : e,
      ),
    };
    saveAndNotify();
  },

  updateSettings(patch: Partial<SiteSettings>) {
    currentState = {
      ...currentState,
      settings: { ...currentState.settings, ...patch },
    };
    saveAndNotify();
  },

  updateDate(id: string, patch: Partial<ImportantDate>) {
    currentState = {
      ...currentState,
      dates: currentState.dates.map((d) => (d.id === id ? { ...d, ...patch } : d)),
    };
    saveAndNotify();
  },

  updateFaq(id: string, patch: Partial<FaqItem>) {
    currentState = {
      ...currentState,
      faq: currentState.faq.map((f) => (f.id === id ? { ...f, ...patch } : f)),
    };
    saveAndNotify();
  },

  addFaq(item: FaqItem) {
    currentState = {
      ...currentState,
      faq: [item, ...currentState.faq],
    };
    saveAndNotify();
  },

  removeFaq(id: string) {
    currentState = {
      ...currentState,
      faq: currentState.faq.filter((f) => f.id !== id),
    };
    saveAndNotify();
  },

  updatePayment(patch: Partial<typeof seedPayment>) {
    currentState = {
      ...currentState,
      payment: { ...currentState.payment, ...patch },
    };
    saveAndNotify();
  },

  getEvents(): SymposiumEvent[] {
    return currentState.events;
  },

  getEventBySlug(slug: string): SymposiumEvent | undefined {
    return currentState.events.find((e) => e.slug === slug);
  },

  getEventsByCategory(category: EventCategory): SymposiumEvent[] {
    return currentState.events.filter((e) => e.category === category);
  },

  getCoordinators(): Coordinator[] {
    return currentState.coordinators;
  },

  getCoordinatorsForIds(ids: string[]): Coordinator[] {
    return ids
      .map((id) => currentState.coordinators.find((c) => c.id === id))
      .filter(Boolean) as Coordinator[];
  },

  getSettings(): SiteSettings {
    return currentState.settings;
  },
};

export function useAppData(): AppDataState {
  return useSyncExternalStore(
    appDataStore.subscribe,
    appDataStore.getState,
    appDataStore.getState,
  );
}