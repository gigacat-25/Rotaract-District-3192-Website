"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MemberSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { href: '/events', label: 'Explore', icon: 'explore' },
    { href: '/profile', label: 'Profile', icon: 'person_pin' },
    { href: '/lms', label: 'Academy', icon: 'school' },
    { href: '/mom', label: 'Minutes', icon: 'description' },
  ];

  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-surface-container-low border-r border-outline/10 z-50 flex flex-col">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white shadow-lg">
          <span className="material-symbols-outlined">hub</span>
        </div>
        <div className="flex flex-col">
          <span className="font-black text-on-surface leading-none tracking-tight">PORTAL</span>
          <span className="text-[9px] font-bold text-outline uppercase tracking-widest mt-1">District 3192</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menuItems.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all ${
                isActive 
                  ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                  : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
              }`}
            >
              <span className={`material-symbols-outlined text-xl ${isActive ? '' : 'opacity-60'}`}>
                {item.icon}
              </span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-outline/5 mt-auto">
        <button className="w-full bg-gradient-to-br from-primary to-secondary text-white font-black text-[10px] uppercase tracking-widest py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base">add_circle</span>
          Create Event
        </button>
        <Link href="/" className="mt-6 flex items-center gap-3 px-6 py-3 text-error hover:bg-error/5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all">
          <span className="material-symbols-outlined text-xl">logout</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
