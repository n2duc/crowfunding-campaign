'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

import Logo from "./logo"
import { navLinks } from "@/constants"
import ThemeToggle from "./theme-toggle"

interface LinkActiveIconProps {
  href: string
  isActive?: boolean
  disabled?: boolean
  children: React.ReactNode
}

const LinkActiveIcon = ({ href, isActive, disabled, children }: LinkActiveIconProps) => {
  return (
    <Link href={href} className={`w-12 h-12 rounded-[10px] ${isActive && !disabled && 'bg-primary-50 dark:bg-dark-stroke'} ${isActive && !disabled ? 'text-primary-500' : 'text-icon dark:text-text-text3'} flex justify-center items-center`}>
      {children}
    </Link>
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
            <LinkActiveIcon key={index} href={link.href} disabled={link.disabled} isActive={pathname === link.href}>
              {link.icon}
            </LinkActiveIcon>
          ))}
        </div>

        <ThemeToggle size="lg" />
      </div>
    </div>
  )
}

export default Sidebar