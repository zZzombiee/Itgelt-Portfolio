import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Next.js Setup",
  description: "A complete Next.js setup with TypeScript and Tailwind CSS",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-background">
          <header className="border-b">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Next.js App</h1>
                <div className="flex space-x-4">
                  <a href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </a>
                  <a href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </a>
                </div>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t mt-auto">
            <div className="container mx-auto px-4 py-8">
              <p className="text-center text-muted-foreground">
                © 2024 Next.js Setup. Built with Next.js and Tailwind CSS.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
