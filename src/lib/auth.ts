import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "admin@cyberlofi.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        if (
          credentials?.email === "admin@cyberlofi.com" &&
          credentials.password === "admin123"
        ) {
          return {
            id: "1",
            email: "admin@cyberlofi.com",
          };
        }

        return null;
      },
    }),
  ],
  secret: process.env.SECRET,
};
