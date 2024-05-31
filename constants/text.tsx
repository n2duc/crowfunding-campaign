import React from 'react';
import { LayoutGrid, CircleUser, LogOut, HandHeart, Wallet, WalletCards } from 'lucide-react';

interface NavLink {
  title: string;
  href: string;
  icon: React.ReactNode;
  disabled?: boolean;
}

export const navLinks: NavLink[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: <LayoutGrid />,
  },
  {
    title: "Campaign",
    href: "/campaign",
    icon: <HandHeart />,
  },
  {
    title: "Payment",
    href: "/payment",
    icon: <Wallet />,
  },
  {
    title: "Withdraw",
    href: "/withdraw",
    icon: <WalletCards />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <CircleUser />,
  },
  {
    title: "Logout",
    href: '/',
    icon: <LogOut />,
    disabled: true,
  },
]