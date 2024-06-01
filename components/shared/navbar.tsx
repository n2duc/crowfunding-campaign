'use client';

import { Search, TrendingUp, ChevronDown, Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar"
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";

import Logo from "./logo";
import { navLinks } from "@/constants";
import ThemeToggle from "./theme-toggle";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false);

  return (
    <div className="w-full flex md:flex-row justify-between mb-[35px] gap-6">
      <Button
        variant="ghost"
        className="h-10 w-10 object-contain lg:hidden"
        onClick={() => setToggleDrawer((prev) => !prev)}
      >
        <Menu size={24} className="flex-shrink-0" />
      </Button>
      <div className="lg:flex-1 flex flex-row w-full min-w-[220px] lg:max-w-[458px] py-[6px] pl-4 pr-2 lg:py-[5px] lg:pl-4 lg:pr-2 bg-white dark:bg-dark-secondary rounded-[100px]">
        <input type="text" placeholder="Do fundrise now" className="w-full rounded-md border-none text-xs lg:text-sm text-text-text1 dark:text-white placeholder:text-text-text4 dark:placeholder:text-text-text2 leading-[18px] lg:leading-[22px] bg-transparent p-[5px] lg:p-[10px] outline-none" />
        <Button type="button" className="py-1.5 px-[13px] lg:py-[11px] lg:px-[27px] rounded-[20px]">
          <Search size={18} className="size-4 lg:size-[18px]" />
        </Button>
      </div>

      <div className="flex flex-row items-center justify-end gap-10">
        <div className="py-[13px] sm:flex hidden items-center text-base font-semibold cursor-pointer gap-x-2 text-icon dark:text-text-text3">
          <TrendingUp size={20} />
          <span className="text-text-text2 dark:text-text-text3">Fundrising for</span>
          <ChevronDown size={20} />
        </div>
        <Button variant="secondary" className="sm:flex hidden h-[52px] p-[13px] px-[26px] text-base leading-[26px]" onClick={() => router.push('/campaign')}>
          Start a campaign
        </Button>
        <Link href="/profile">
          <Avatar className="h-10 w-10 lg:h-[52px] lg:w-[52px]">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>

      {/* Small screen navigation */}
      <div className={`absolute p-6 top-0 right-0 left-0 bg-whitish-lite dark:bg-dark-bg z-10 ${!toggleDrawer ? '-translate-x-[100vw]' : 'translate-x-0'} transition-transform duration-500`}>
        <div className="flex items-center justify-between mb-[30px]">
          <Logo className="h-10 w-10" />
          <Button variant="secondary" className="h-10 p-[9px] px-[22px] text-sm leading-[22px]" onClick={() => router.push('/campaign')}>
            Start a campaign
          </Button>
          <Button
            variant="ghost"
            className="h-10 w-10 object-contain"
            onClick={() => setToggleDrawer((prev) => !prev)}
          >
            <Menu size={24} className="flex-shrink-0" />
          </Button>
        </div>
        {/* Navbar */}
        <ul className="flex flex-col items-start w-full rounded-sm gap-y-[15px] bg-white dark:bg-dark-secondary dark:shadow-btnDark shadow-btnLight py-5">
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href} className={`w-full flex items-center gap-5 px-5 py-[14px] ${pathname === link.href && !link.disabled ? "text-primary-500 bg-primary-50 dark:bg-dark-stroke" : "text-text-text3"}`}>
              {link.icon}
              <p className="text-sm font-medium">{link.title}</p>
            </Link>
          ))}
          <ThemeToggle size="sm" />
        </ul>
      </div>

    </div>
  )
}

export default Navbar;