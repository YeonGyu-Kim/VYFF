import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions, AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db';

export const authOptions: NextAuthOptions = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        username: { label: 'username', type: 'text' },
        email: { label: 'email', type: 'email' },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.username) {
          throw new Error('Inavalid credentials');
        }
        // Add logic here to look up the user from the credentials supplied
        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error('Inavalid credentials');
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
  debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { authOptions as GET, authOptions as POST };
