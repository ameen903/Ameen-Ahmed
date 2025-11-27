"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Link from "next/link"
import { Moon, Sun } from "lucide-react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDark(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !dark
    setDark(newDark)
    if (newDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {/* Header Navigation */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <nav className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              Ameen Ahmed
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Resume
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Projects
              </Link>
              <Link href="/blogs" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Blogs
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-foreground transition-colors"
                  aria-label="Toggle theme"
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}
            </div>
          </nav>
        </header>

        {children}

        {/* Footer */}
        <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Main Navigation</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <Link href="/" className="hover:text-accent transition-colors">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-accent transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" className="hover:text-accent transition-colors">
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-accent transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Other Links</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="https://github.com/ameen903" className="hover:text-accent transition-colors">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-colors">
                      Twitter
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href="#" className="hover:text-accent transition-colors">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-accent transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
              <p>© 2025 Ameen Ahmed. All rights reserved.</p>
            </div>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  )
}
