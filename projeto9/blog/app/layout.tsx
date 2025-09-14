import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meu Blog Pessoal",
  description: "Um blog pessoal simples criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Header com navegação */}
          <header className="bg-white shadow-sm border-b">
            <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                <div className="flex items-center">
                  <Link
                    href="/"
                    className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    Meu Blog
                  </Link>
                </div>
                <div className="flex space-x-8">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    Sobre
                  </Link>
                </div>
              </div>
            </nav>
          </header>

          {/* Conteúdo principal */}
          <main className="flex-1">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>

          {/* Footer */}
          <footer className="bg-white border-t">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <p className="text-center text-gray-600 text-sm">
                © 2025 Meu Blog Pessoal. Feito com Next.js
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
