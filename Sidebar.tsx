'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, ShoppingBag, Ticket, Sword, Search, 
  MessageSquare, Settings, LogOut, User, TrendingUp 
} from 'lucide-react';
import { useAuth } from '@/components/providers/AuthProvider';

const menuItems = [
  { name: 'Dashboard', href: '/', icon: Home },
  { name: 'Buy Pets', href: '/market/pets', icon: ShoppingBag },
  { name: 'Tickets', href: '/market/tickets', icon: Ticket },
  { name: 'Items', href: '/market/items', icon: Sword },
  { name: 'Wanted', href: '/market/wanted', icon: Search },
  { name: 'Chat', href: '/chat', icon: MessageSquare },
  { name: 'Trending', href: '/trending', icon: TrendingUp },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-dark-900 border-r border-yellow-600/30 flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/" className="block">
          <h1 className="text-2xl font-heading text-yellow-400 gold-glow">
            Gilded<span className="text-white">Hub</span>
          </h1>
          <p className="text-xs text-gray-500 mt-1">MMORPG Marketplace</p>
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30' 
                  : 'text-gray-400 hover:bg-dark-800 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-yellow-400' : ''}`} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-gray-800">
        {user ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center font-bold text-white">
                {user.displayName?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold truncate">{user.displayName}</p>
                <p className="text-xs text-green-400">● Online</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/profile" className="flex items-center justify-center gap-2 px-3 py-2 bg-dark-800 rounded-lg text-sm hover:bg-dark-750">
                <User className="w-4 h-4" /> Profile
              </Link>
              <Link href="/settings" className="flex items-center justify-center gap-2 px-3 py-2 bg-dark-800 rounded-lg text-sm hover:bg-dark-750">
                <Settings className="w-4 h-4" /> Settings
              </Link>
            </div>
            <button 
              onClick={logout}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <Link href="/login" className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-yellow-500 text-black rounded-lg font-bold">
              <User className="w-4 h-4" /> Login
            </Link>
            <Link href="/register" className="flex items-center justify-center w-full px-4 py-2 bg-dark-800 border border-gray-600 rounded-lg">
              Register
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}