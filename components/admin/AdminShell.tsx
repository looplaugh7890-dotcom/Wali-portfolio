'use client';

import { usePathname } from 'next/navigation';
import { Sidebar } from './Sidebar';
import { MobileAdminNav } from './MobileAdminNav';

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === '/admin/login';

  if (isLogin) {
    return <div className="min-h-screen bg-[#0A0A0C]">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-[#E7E7EA] flex">
      <Sidebar />
      <main className="flex-1 min-w-0 lg:pl-64">
        <MobileAdminNav />
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-10">{children}</div>
      </main>
    </div>
  );
}
