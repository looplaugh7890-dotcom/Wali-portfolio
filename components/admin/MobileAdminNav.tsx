'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

const links = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/projects', label: 'Projects' },
  { href: '/admin/messages', label: 'Messages' },
  { href: '/admin/testimonials', label: 'Testimonials' },
  { href: '/admin/blog', label: 'Blog' },
];

export function MobileAdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className="lg:hidden sticky top-0 z-40 border-b border-white/10 bg-[#0D0D10]">
      <div className="flex items-center justify-between px-4 py-3">
        <p className="text-sm font-semibold text-white">Admin</p>
        <button onClick={handleLogout} className="text-white/60 p-1">
          <LogOut size={16} />
        </button>
      </div>
      <nav className="flex gap-1 overflow-x-auto px-4 pb-3 no-scrollbar">
        {links.map((link) => {
          const active = link.href === '/admin' ? pathname === link.href : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs whitespace-nowrap ${
                active ? 'bg-indigo-500/15 text-indigo-300' : 'text-white/50'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
