
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeProvider } from "@/components/theme-provider";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <SidebarProvider>
    <AppSidebar />
    <html>
      <body>
        <SidebarTrigger />
       
        {children}
        
      </body>
    </html>
  </SidebarProvider>
    
  );
}
