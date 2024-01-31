import type { Metadata, Viewport } from 'next';
import { Inter, Palanquin, Nanum_Gothic } from 'next/font/google';
import './globals.css';
import AuthContext from '@/context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import ProviderContext from '@/context/ProviderContext';

const inter = Nanum_Gothic({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'vyff',
  robots: {
    googleBot: {
      notranslate: true,
    },
  },
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
          <ProviderContext>
            <ThemeProvider
              attribute='class'
              defaultTheme='dark'
              enableSystem
              disableTransitionOnChange
            >
              <ToastContainer
                position='top-center'
                autoClose={2500}
                theme='light'
              />
              {children}
            </ThemeProvider>
          </ProviderContext>
        </AuthContext>
      </body>
    </html>
  );
}
