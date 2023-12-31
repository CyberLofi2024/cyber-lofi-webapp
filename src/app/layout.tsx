"use client";
import "./globals.scss";
import NextAuthSessionProvider from "./providers/sessionProvider";
import { Session } from "next-auth";
import { MetaMaskContextProvider } from "@cyberlofi^_^/hooks/useMetaMask";
import { Hotkeys } from "@cyberlofi^_^/components/Hotkeys/Hotkeys";

export default function RootLayout({
  children,
  session,
}: {
  readonly children: React.ReactNode;
  readonly session: Session;
}) {
  return (
    <html lang="en">
      <body>
        <MetaMaskContextProvider>
          <NextAuthSessionProvider session={session}>
            <main id="main" style={{ flexGrow: 1 }}>
              <Hotkeys />
              {children}
            </main>
          </NextAuthSessionProvider>
        </MetaMaskContextProvider>
      </body>
    </html>
  );
}
