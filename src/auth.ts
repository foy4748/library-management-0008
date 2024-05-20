import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Users, { IUser } from "./Models/Users";
import bcryptjs from "bcryptjs";

export const authConfig = {
  // Callback
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.example",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials;
        const isUserFound = (await Users.findOne({ email })
          .lean()
          .exec()) as IUser;

        if (isUserFound) {
          // Any object returned will be saved in `user` property of the JWT
          const isPasswordCorrect = await bcryptjs.compare(
            password,
            String(isUserFound?.password)
          );
          if (isPasswordCorrect) {
            return isUserFound;
          } else {
            return null;
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
    // ...add more providers here
  ],
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  jwt: {
    secret: process.env.AUTH_SECRET,
    maxAge: 24 * 60 * 60,
  },
} satisfies NextAuthOptions;

const handler = NextAuth(authConfig);

export const { authorize } = handler;

export default handler;
