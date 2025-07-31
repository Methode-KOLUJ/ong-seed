'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Home/Navbar';

export function RootClientLayout({ children }) {
  const pathname = usePathname();

  const hideNavbarOn = [
    '/admin',
    '/admin/addProduct',
    '/admin/blogList',
    '/admin/subscriptions',
    '/Magazine',
    "/Postuler",
    "/Chatbot"
  ];

  const hideNavbar = (
    hideNavbarOn.includes(pathname) ||
    pathname.startsWith('/blogs/')
  );

  const showNavbar = !hideNavbar;

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
}
