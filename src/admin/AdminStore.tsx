// src/admin/AdminStore.tsx
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import type { SymposiumEvent } from "@/data/events";
import type { FaqItem } from "@/data/faq";
import { mockRegistrations, type Registration } from "@/data/registrations";
import type { Coordinator, ImportantDate, SiteSettings } from "@/data/site";
import { appDataStore, useAppData } from "@/services/appDataStore";
import { paymentSettings as seedPayment } from "@/services/paymentService";

type AdminState = {
  authed: boolean;
  adminEmail: string;
  login: (email: string, password: string) => boolean;
  logout: () => void;

  registrations: Registration[];
  setRegistrations: (r: Registration[]) => void;

  events: SymposiumEvent[];
  updateEvent: (id: string, patch: Partial<SymposiumEvent>) => void;
  addEvent: (event: SymposiumEvent) => void;
  removeEvent: (id: string) => void;

  coordinators: Coordinator[];
  addCoordinator: (coordinator: Coordinator) => void;
  updateCoordinator: (id: string, patch: Partial<Coordinator>) => void;
  removeCoordinator: (id: string) => void;
  assignCoordinator: (eventId: string, coordinatorId: string) => void;
  unassignCoordinator: (eventId: string, coordinatorId: string) => void;

  dates: ImportantDate[];
  updateDate: (id: string, patch: Partial<ImportantDate>) => void;

  faq: FaqItem[];
  updateFaq: (id: string, patch: Partial<FaqItem>) => void;
  removeFaq: (id: string) => void;
  addFaq: (item: FaqItem) => void;

  settings: SiteSettings;
  updateSettings: (patch: Partial<SiteSettings>) => void;

  payment: typeof seedPayment;
  updatePayment: (patch: Partial<typeof seedPayment>) => void;
};

const AdminContext = createContext<AdminState | null>(null);

export const ADMIN_EMAIL = "evitron26@gmail.com";

export function AdminProvider({ children }: { children: ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [registrations, setRegistrations] = useState<Registration[]>(mockRegistrations);
  const appData = useAppData();

  const value = useMemo<AdminState>(
    () => ({
      authed,
      adminEmail: ADMIN_EMAIL,
      login: (email, password) => {
        const ok = email.trim().toLowerCase() === ADMIN_EMAIL && password.length >= 4;
        if (ok) setAuthed(true);
        return ok;
      },
      logout: () => setAuthed(false),

      registrations,
      setRegistrations,

      events: appData.events,
      updateEvent: (id, patch) => appDataStore.updateEvent(id, patch),
      addEvent: (event) => appDataStore.addEvent(event),
      removeEvent: (id) => appDataStore.removeEvent(id),

      coordinators: appData.coordinators,
      addCoordinator: (coord) => appDataStore.addCoordinator(coord),
      updateCoordinator: (id, patch) => appDataStore.updateCoordinator(id, patch),
      removeCoordinator: (id) => appDataStore.removeCoordinator(id),
      assignCoordinator: (eventId, coordinatorId) => appDataStore.assignCoordinator(eventId, coordinatorId),
      unassignCoordinator: (eventId, coordinatorId) => appDataStore.unassignCoordinator(eventId, coordinatorId),

      dates: appData.dates,
      updateDate: (id, patch) => appDataStore.updateDate(id, patch),

      faq: appData.faq,
      updateFaq: (id, patch) => appDataStore.updateFaq(id, patch),
      removeFaq: (id) => appDataStore.removeFaq(id),
      addFaq: (item) => appDataStore.addFaq(item),

      settings: appData.settings,
      updateSettings: (patch) => appDataStore.updateSettings(patch),

      payment: appData.payment,
      updatePayment: (patch) => appDataStore.updatePayment(patch),
    }),
    [authed, registrations, appData],
  );

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const ctx = useContext(AdminContext);
  if (!ctx) throw new Error("useAdmin must be used inside AdminProvider");
  return ctx;
}