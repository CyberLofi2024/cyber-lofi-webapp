"use client";
import { MetaMaskUIProvider } from "@metamask/sdk-react-ui";
import NextAuthSessionProvider from "./providers/sessionProvider";
import { Session } from "next-auth";
import { MetaMaskContextProvider } from "@cyberlofi^_^/hooks/useMetaMask";

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return (
    <html lang="en">
      <body>
        <MetaMaskContextProvider>
          <NextAuthSessionProvider session={session}>
            <main id="main" style={{ flexGrow: 1 }}>
              {children}
            </main>
          </NextAuthSessionProvider>
        </MetaMaskContextProvider>
      </body>
    </html>
  );
}
