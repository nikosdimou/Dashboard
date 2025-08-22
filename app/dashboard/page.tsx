"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { useState } from "react"
import Image from "next/image"

import { SectionCards } from "@/components/cards"
import { ChartLineInteractive } from "@/components/charts"
import { SiteHeader } from "@/components/header"
import { ChartPieSimple } from "@/components/pie"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Orders from "@/components/orders"

const ADMIN_USER = "admin";
const ADMIN_PASS = "password123"; // Change this!

export default function Pae() {
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
      
        <form
          onSubmit={handleLogin}
         
        >
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
            type="text"
            placeholder="Username"
            value={user}
            onChange={e => setUser(e.target.value)}
            className="border rounded px-3 py-2"
            required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
      
              </div>
              <Input  type="password"
            placeholder="Password"
            value={pass}
            onChange={e => setPass(e.target.value)}
            className="border rounded px-3 py-2"
            required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
           
          </div>
         
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/images.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
        </form>
      
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
               <Orders/>
              </div>
              <div className="px-4 lg:px-6">
                
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
