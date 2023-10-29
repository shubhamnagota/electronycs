import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'E-Commerce App',
  description: 'E-Commerce App',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} text-bg`}>
        <div className='flex flex-col min-h-screen'>
          <NavBar />
          <main className='flex-grow'>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
