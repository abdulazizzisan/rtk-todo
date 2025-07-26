import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppDock } from "@/app/components/AppDock";
import { ThemeProvider } from "@/components/theme-provider";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo - RTK",
  description: "A simple todo app using RTK",
  keywords: ["RTK", "Redux", "Todo"],
  authors: [
    {
      name: "Abdul Aziz Zisan",
      url: "https://abdulazizzisan.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme={"system"}
          enableSystem
          disableTransitionOnChange
          storageKey={"theme"}
        >
          <StoreProvider>
            <main className="mx-auto p-4 pb-24 xl:container">{children}</main>
            <Toaster />
            <AppDock />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
