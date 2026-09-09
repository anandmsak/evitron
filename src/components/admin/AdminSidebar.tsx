import { Link } from "@tanstack/react-router";
import {
  CalendarDays,
  CircleHelp,
  Contact,
  CreditCard,
  Download,
  LayoutDashboard,
  ListChecks,
  Settings,
  ToggleLeft,
  Users,
  UserSquare,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const overview = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/registrations", label: "Registrations", icon: ListChecks, exact: false },
  { to: "/admin/participants", label: "Participants", icon: Users, exact: false },
  { to: "/admin/payments", label: "Payments", icon: CreditCard, exact: false },
] as const;

const manage = [
  { to: "/admin/events", label: "Events", icon: ListChecks, exact: false },
  { to: "/admin/coordinators", label: "Coordinators", icon: UserSquare, exact: false },
  { to: "/admin/dates", label: "Important Dates", icon: CalendarDays, exact: false },
  { to: "/admin/faq", label: "FAQ Manager", icon: CircleHelp, exact: false },
  { to: "/admin/contact", label: "Contact Settings", icon: Contact, exact: false },
] as const;

const control = [
  { to: "/admin/registration-control", label: "Registration Control", icon: ToggleLeft, exact: false },
  { to: "/admin/exports", label: "Exports", icon: Download, exact: false },
  { to: "/admin/settings", label: "Site Settings", icon: Settings, exact: false },
] as const;

export function AdminSidebar() {
  const groups = [
    { label: "Overview", items: overview },
    { label: "Manage", items: manage },
    { label: "Control", items: control },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <p className="truncate px-2 font-display text-sm font-bold tracking-wider text-metal-gradient">
          EVITRON ADMIN
        </p>
      </SidebarHeader>
      <SidebarContent>
        {groups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton asChild tooltip={item.label}>
                      <Link
                        to={item.to}
                        activeOptions={{ exact: item.exact }}
                        className="flex items-center gap-2 data-[status=active]:text-primary"
                      >
                        <item.icon className="size-4 shrink-0" />
                        <span className="truncate">{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
