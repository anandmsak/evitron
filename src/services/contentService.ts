// src/services/contentService.ts
import { appDataStore } from "@/services/appDataStore";
import type { EventCategory, SymposiumEvent } from "@/data/events";
import type { FaqItem } from "@/data/faq";
import type { Coordinator } from "@/data/site";

export async function fetchEvents(): Promise<SymposiumEvent[]> {
  return appDataStore.getEvents();
}

export async function fetchEvent(slug: string): Promise<SymposiumEvent | undefined> {
  return appDataStore.getEventBySlug(slug);
}

export function eventsFor(category: EventCategory) {
  return appDataStore.getEventsByCategory(category);
}

export function coordinatorsFor(ids: string[]): Coordinator[] {
  return appDataStore.getCoordinatorsForIds(ids);
}

export async function fetchCoordinators(): Promise<Coordinator[]> {
  return appDataStore.getCoordinators();
}

export async function fetchImportantDates() {
  return appDataStore.getState().dates;
}

export async function fetchFaq(): Promise<FaqItem[]> {
  return appDataStore.getState().faq;
}

export async function fetchSiteSettings() {
  return appDataStore.getSettings();
}

export async function saveSiteSettings(next: Partial<ReturnType<typeof appDataStore.getSettings>>) {
  appDataStore.updateSettings(next);
  return appDataStore.getSettings();
}