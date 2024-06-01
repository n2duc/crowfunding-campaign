'use client';

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

const ThemeToggle = ({ size }: { size: 'lg' | 'sm' }) => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={`${size === "lg" ? "w-12 h-12 rounded-[10px] text-icon dark:text-text-text3 flex justify-center items-center bg-white dark:bg-dark-secondary shadow-btnLight dark:shadow-btnDark" : "flex items-center gap-5 px-5 py-[14px] text-text-text3"}`}
    >
      {theme === 'dark' ? (
        <SunIcon className="h-6 w-6 transition-all" />
      ) : (
        <MoonIcon className="h-6 w-6 transition-all " />
      )}
      {size === "sm" && <p className="text-sm font-medium">Light/Dark</p>}
    </button>
  )
}

export default ThemeToggle;