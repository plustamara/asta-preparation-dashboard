import type { Metadata } from "next";
import { jakarta } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asta's Preparation Dashboard",
  description: "Track Asta's training plan and see how much is complete.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.className} min-h-screen bg-[#0c0e12] text-slate-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}