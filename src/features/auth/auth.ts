import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import * as repository from "./repository";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/db";


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),

    session: {
        strategy: "jwt",
    },

    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await repository.findByEmail(
                    credentials.email as string
                );

                if (!user || !user.password) {
                    return null;
                }
                const valid = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                );

                if (!valid) {
                    return null;
                }

                return user;
            },
        }),
    ],
});