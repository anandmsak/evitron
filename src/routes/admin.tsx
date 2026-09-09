import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { ADMIN_EMAIL, AdminProvider, useAdmin } from "@/admin/AdminStore";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Console — EVITRON 2K26" },
      { name: "description", content: "Organiser console for EVITRON 2K26 registrations and content." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  return (
    <AdminProvider>
      <AdminGate />
    </AdminProvider>
  );
}

function AdminGate() {
  const { authed } = useAdmin();
  if (!authed) return <AdminLogin />;
  return <AdminShell />;
}

function AdminLogin() {
  const { login } = useAdmin();
  const [email, setEmail] = useState(ADMIN_EMAIL);
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(email, password)) {
      toast.error("Use the organiser email and a password of at least 4 characters.");
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <div className="absolute inset-0 circuit-grid opacity-50" aria-hidden />
      <div className="absolute inset-0 hero-aura" aria-hidden />
      <form onSubmit={submit} className="panel relative w-full max-w-sm p-8">
        <h1 className="font-display text-xl font-bold text-metal-gradient">EVITRON ADMIN</h1>
        <p className="mt-1 text-sm text-muted-foreground">Mock sign in for the organiser console.</p>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="admin-email" className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Email
            </Label>
            <Input
              id="admin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="admin-pass" className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
              Password
            </Label>
            <Input
              id="admin-pass"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1.5"
            />
          </div>
        </div>

        <Button type="submit" className="mt-6 w-full">
          Sign in
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          Mock auth only — any password of 4+ characters works with {ADMIN_EMAIL}.
        </p>
        <Link to="/" className="mt-4 block text-xs text-primary hover:underline">
          ← Back to site
        </Link>
      </form>
    </div>
  );
}

function AdminShell() {
  const { logout, adminEmail } = useAdmin();

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <header className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-b border-border px-3 py-2">
            <SidebarTrigger />
            <p className="min-w-0 truncate text-sm text-muted-foreground">{adminEmail}</p>
            <Button variant="ghost" size="sm" onClick={logout} className="shrink-0">
              <LogOut className="size-4" /> Sign out
            </Button>
          </header>
          <main className="flex-1 p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
