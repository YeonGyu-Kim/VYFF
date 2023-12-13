import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthContext from '@/context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthContext>
          <ToastContainer
            position='top-center'
            autoClose={3000}
            theme='light'
          />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
