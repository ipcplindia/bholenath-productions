import './globals.css';
import { Inter } from 'next/font/google';
import { siteConfig } from '@/config/site.config';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BHOLENATH PRODUCTIONS | Divine AI Film Console',
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#030305] text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
