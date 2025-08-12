import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HortSoy Intranet",
  description: "Sistema de intranet corporativa da HortSoy - Conectando todas as filiais",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} storageKey="hortsoy-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
