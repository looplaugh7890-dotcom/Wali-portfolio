'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquare,
  Star,
  Newspaper,
  LogOut,
  ExternalLink,
} from 'lucide-react';

const links = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/projects', label: 'Projects', icon: FolderKanban },
  { href: '/admin/messages', label: 'Messages', icon: MessageSquare },
  { href: '/admin/testimonials', label: 'Testimonials', icon: Star },
  { href: '/admin/blog', label: 'Blog', icon: Newspaper },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <aside className="hidden lg:flex flex-col fixed inset-y-0 left-0 w-64 border-r border-white/10 bg-[#0D0D10] px-5 py-6">
      <div className="px-2 mb-8">
        <p className="text-sm font-semibold text-white">Wali Aslam</p>
        <p className="text-xs text-white/40">Admin Dashboard</p>
      </div>

      <nav className="flex-1 space-y-1">
        {links.map((link) => {
          const active = link.exact ? pathname === link.href : pathname.startsWith(link.href);
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                active
                  ? 'bg-indigo-500/15 text-indigo-300'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={16} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="space-y-1 pt-4 border-t border-white/10">
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
        >
          <ExternalLink size={16} /> View site
        </a>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors"
        >
          <LogOut size={16} /> Log out
        </button>
      </div>
    </aside>
  );
}
