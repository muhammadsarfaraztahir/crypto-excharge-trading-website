import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Crypto Exchange App',
  description: 'A simple cryptocurrency exchange app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="flex h-screen">
          <nav className="w-64 bg-gray-800 shadow-md">
            <div className="p-4">
              <h1 className="text-2xl font-bold text-blue-400">Crypto Exchange</h1>
              <ul className="mt-4">
                <li className="mb-2">
                  <a href="/" className="text-gray-300 hover:text-blue-400">Dashboard</a>
                </li>
                <li className="mb-2">
                  <a href="/market" className="text-gray-300 hover:text-blue-400">Market</a>
                </li>
                <li className="mb-2">
                  <a href="/trade" className="text-gray-300 hover:text-blue-400">Trade</a>
                </li>
                <li className="mb-2">
                  <a href="/wallet" className="text-gray-300 hover:text-blue-400">Wallet</a>
                </li>
                <li className="mb-2">
                  <a href="/login" className="text-gray-300 hover:text-blue-400">Login</a>
                </li>
                <li className="mb-2">
                  <a href="/signup" className="text-gray-300 hover:text-blue-400">Sign Up</a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

