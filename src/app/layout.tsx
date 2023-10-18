'use client';
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui';
import NextAuthSessionProvider from './providers/sessionProvider';
import { Session } from 'next-auth';

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
        <MetaMaskUIProvider
          sdkOptions={{
            dappMetadata: {
              name: 'Demo UI React App',
            },
          }}
        >
          <NextAuthSessionProvider session={session}>
            <main id="main" style={{ flexGrow: 1 }}>
              {children}
            </main>
          </NextAuthSessionProvider>
        </MetaMaskUIProvider>
      </body>
    </html>
  );
}
