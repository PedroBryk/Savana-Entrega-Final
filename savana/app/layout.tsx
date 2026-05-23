import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Header } from "../app/components/organismos/header";
import { Footer } from "../app/components/organismos/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Savana",
  description: "Pet Café Savana",
  icons: {
    icon: "/images/pata.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <Header />

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
