import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const nunito = Nunito({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Color's Table",
  description: " ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${nunito.className} bg-zinc-900`}>{children} <Toaster/></body>
    </html>
  );
}
