import './globals.css';
import type { Metadata } from 'next';
import Sidebar from '@/components/layout/Sidebar';
import MobileNav from '@/components/layout/MobileNav';
import AuthProvider from '@/components/providers/AuthProvider';

export const metadata: Metadata = {
  title: 'The Gilded Auction | MMORPG Marketplace',
  description: 'Trade pets, tickets, and rare items securely with other players',
  manifest: '/manifest.json',
  themeColor: '#0f0f12',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-dark-900 text-white min-h-screen antialiased">
        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:min-h-screen">
          <Sidebar />
          <div className="flex-1 ml-64">
            {children}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col min-h-screen">
          <div className="flex-1 pt-16 pb-20 safe-bottom">
            {children}
          </div>
          <MobileNav />
        </div>
      </body>
    </html>
  );
}