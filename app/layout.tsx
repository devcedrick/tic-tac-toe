import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GameHistory from "@/components/layout/GameHistory";
import GameContextProvider from "@/contexts/GameContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tic Tac Toe - DevDotCed",
  description: "A simple classic Tic-Tac-Toe game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full h-screen grid grid-cols-1 lg:grid-cols-[2fr_1fr] `}
      >
        <GameContextProvider>
          {children}
          <div className="flex items-start justify-center lg:justify-start h-screen">
            <GameHistory/>
          </div>
        </GameContextProvider>
      </body>
    </html>
  );
}
