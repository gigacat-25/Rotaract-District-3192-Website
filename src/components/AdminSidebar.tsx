"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: 'Dashboard', icon: 'space_dashboard' },
    { href: '/admin/president', label: 'President', icon: 'military_tech' },
    { href: '/admin/members', label: 'Members', icon: 'group' },
    { href: '/admin/clubs', label: 'Clubs', icon: 'hub' },
    { href: '/admin/events', label: 'Events', icon: 'event' },
    { href: '/admin/mom', label: 'Minutes', icon: 'description' },
    { href: '/admin/lms', label: 'Academy', icon: 'school' },
    { href: '/admin/announcements', label: 'Announce', icon: 'campaign' },
    { href: '/admin/campaigns', label: 'Campaigns', icon: 'volunteer_activism' },
    { href: '/admin/feeds', label: 'Feeds', icon: 'rss_feed' },
    { href: '/admin/audit', label: 'Audit', icon: 'security' },
  ];

  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-surface-container-low border-r border-outline/10 z-50 flex flex-col">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg">
          <span className="material-symbols-outlined">terminal</span>
        </div>
        <div className="flex flex-col">
          <span className="font-black text-primary leading-none tracking-tight">ADMIN</span>
          <span className="text-[9px] font-bold text-outline uppercase tracking-widest mt-1">Terminal 3192</span>
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
        <div className="bg-surface-container-high/50 p-4 rounded-2xl border border-white/40">
           <p className="text-[8px] font-bold text-on-surface-variant uppercase tracking-widest opacity-60">System Protocol</p>
           <div className="flex items-center gap-2 mt-2">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
             <p className="text-[10px] font-black text-on-surface uppercase tracking-tight">Active Node</p>
           </div>
        </div>
        <Link href="/" className="mt-4 flex items-center gap-3 px-6 py-3 text-error hover:bg-error/5 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all">
          <span className="material-symbols-outlined text-xl">logout</span>
          Logout
        </Link>
      </div>
    </aside>
  );
}
