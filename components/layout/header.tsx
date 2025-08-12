"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, Search, Menu, X, Moon, Sun, User, LogOut, Settings } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/timeline" },
  { name: "Sistemas", href: "/sistemas" },
  { name: "Filiais", href: "/filiais" },
  { name: "Aniversariantes", href: "/aniversariantes" },
  { name: "Treinamentos", href: "/treinamentos" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={theme === "dark" ? "/logo-hortsoy-white.png" : "/logo-hortsoy.png"}
                alt="HortSoy"
                width={120}
                height={40}
                className="h-10 w-auto transition-opacity duration-200"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "text-[#00A859] bg-green-50 dark:bg-green-900/30 dark:text-green-400 border-b-2 border-[#00A859]"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#00A859] hover:bg-green-50 dark:hover:bg-green-900/20 dark:hover:text-green-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Buscar..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00A859] focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-700 dark:text-gray-300" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-700 dark:text-gray-300" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="relative bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <Bell className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-[#00A859] rounded-full"></span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                align="end"
                forceMount
              >
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-gray-900 dark:text-gray-100">João Silva</p>
                    <p className="text-xs leading-none text-gray-500 dark:text-gray-400">joao.silva@hortsoy.com.br</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem className="hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <User className="mr-2 h-4 w-4" />
                  <span>Minha Conta</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Configurações</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                <DropdownMenuItem className="hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Sair</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile menu button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-4 w-4 text-gray-700 dark:text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    pathname === item.href
                      ? "text-[#00A859] bg-green-50 dark:bg-green-900/30 dark:text-green-400"
                      : "text-gray-700 dark:text-gray-300 hover:text-[#00A859] hover:bg-green-50 dark:hover:bg-green-900/20 dark:hover:text-green-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" />
                <input
                  type="text"
                  placeholder="Buscar..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#00A859] focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
