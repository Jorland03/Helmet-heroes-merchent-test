'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, Home, ShoppingBag, Ticket, 
  Sword, Search, MessageSquare, User, Plus 
} from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Market', href: '/market/pets', icon: ShoppingBag },
  { name: 'Sell', href: '/sell', icon: Plus, primary: true },
  { name: 'Wanted', href: '/market/wanted', icon: Search },
  { name: 'Profile', href: '/profile', icon: User },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-900/95 backdrop-blur border-b border-yellow-600/30 px-4 py-3 flex items-center justify-between lg:hidden">
        <button onClick={() => setIsOpen(true)} className="p-2 -ml-2 tap-target">
          <Menu className="w-6 h-6" />
        </button>
        
        <Link href="/" className="font-heading text-xl text-yellow-400 gold-glow">
          Gilded<span className="text-white">Hub</span>
        </Link>
        
        <div className="flex items-center gap-2">
          <Link href="/chat" className="p-2 -mr-2 tap-target relative">
            <MessageSquare className="w-5 h-5 text-gray-400" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Link>
          {user && (
            <Link href="/profile" className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
              {user.displayName?.charAt(0).toUpperCase()}
            </Link>
          )}
        </div>
      </header>

      {/* Side Drawer Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Drawer */}
        <div className="absolute left-0 top-0 w-72 h-full bg-dark-900 border-r border-yellow-600/30 flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-gray-800 flex items-center justify-between">
            <h1 className="text-xl font-heading text-yellow-400">Menu</h1>
            <button onClick={() => setIsOpen(false)} className="p-2 tap-target">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (