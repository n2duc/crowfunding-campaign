'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

import Logo from "./logo"
import { navLinks } from "@/constants/text"
import { SunMedium, Moon } from "lucide-react"

interface LinkActiveIconProps {
  href: string
  isActive?: boolean
  children: React.ReactNode
}

const LinkActiveIcon = ({ href, isActive, children }: LinkActiveIconProps) => {
  return (
    <Link href={href} className={`w-12 h-12 rounded-[10px] ${isActive && 'bg-primary-50 dark:bg-dark-stroke'} ${isActive ? 'text-primary-500' : 'text-[#A2A2A8]'} flex justify-center items-center`}>
      {children}
    </Link>
  )
}

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-12 h-12 rounded-[10px] text-[#A2A2A8] flex justify-center items-center"
    >
      {theme === 'dark' ? <SunMedium /> : <Moon />}
    </button>
  )
}

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link href="/">
        <Logo className="inline-block w-10 h-10 lg:w-[52px] lg:h-[52px]" />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-white dark:bg-dark-secondary rounded-[20px] px-[14px] py-10 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navLinks.map((link, index) => (
            <LinkActiveIcon key={index} href={link.href} isActive={pathname === link.href}>
              {link.icon}
            </LinkActiveIcon>
          ))}
        </div>

        <ThemeToggleButton />
      </div>
    </div>
  )
}

export default Sidebar