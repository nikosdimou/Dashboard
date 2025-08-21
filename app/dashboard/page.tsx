"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { useState } from "react"

import { SectionCards } from "@/components/cards"
import { ChartLineInteractive } from "@/components/charts"
import { SiteHeader } from "@/components/header"
import { ChartPieSimple } from "@/components/pie"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

const ADMIN_USER = "admin";
const ADMIN_PASS = "password123"; // Change this!

export default function Page() {
const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
 

  

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setAuthed(true);
    } else {
      alert("Invalid credentials");
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-lg shadow p-8 flex flex-col gap-4 w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Admin Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={e => setUser(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            className="border rounded px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  const tables = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar  variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6">
               <ChartLineInteractive />
              </div>
              <div className="px-4 lg:px-6">
                <ChartPieSimple />
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
