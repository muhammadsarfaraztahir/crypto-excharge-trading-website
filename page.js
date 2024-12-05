'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Jan', BTC: 40000, ETH: 3000, BNB: 400 },
  { name: 'Feb', BTC: 35000, ETH: 2800, BNB: 380 },
  { name: 'Mar', BTC: 45000, ETH: 3200, BNB: 420 },
  { name: 'Apr', BTC: 42000, ETH: 3100, BNB: 410 },
  { name: 'May', BTC: 48000, ETH: 3500, BNB: 450 },
  { name: 'Jun', BTC: 46000, ETH: 3300, BNB: 430 },
]

const currencies = [
  { name: 'Bitcoin', symbol: 'BTC', balance: 1.5, value: 60000 },
  { name: 'Ethereum', symbol: 'ETH', balance: 10, value: 30000 },
  { name: 'Binance Coin', symbol: 'BNB', balance: 50, value: 20000 },
  { name: 'Cardano', symbol: 'ADA', balance: 1000, value: 1000 },
]

export default function Dashboard() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    if (currentUser) {
      setUser(JSON.parse(currentUser))
    } else {
      router.push('/login')
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    router.push('/login')
  }

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <div className="relative min-h-screen bg-gray-900 bg-opacity-75 bg-[url('/coins-bg.jpg')] bg-cover bg-center bg-blend-overlay">
      <div className="absolute top-4 right-4 flex items-center space-x-4">
        <span className="text-gray-300">Welcome, {user.name}</span>
        <Button onClick={handleLogout} variant="outline" className="bg-red-500 hover:bg-red-600 text-white">
          Logout
        </Button>
      </div>
      <div className="pt-16 px-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {currencies.map((currency) => (
            <Card key={currency.symbol} className="bg-gray-800 bg-opacity-75">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-300">{currency.name} Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{currency.balance} {currency.symbol}</div>
                <div className="text-sm text-gray-400">${currency.value.toLocaleString()}</div>
              </CardContent>
            </Card>
          ))}
          <Card className="col-span-4 bg-gray-800 bg-opacity-75">
            <CardHeader>
              <CardTitle className="text-gray-300">Portfolio Performance</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                  <Line type="monotone" dataKey="BTC" stroke="#F7931A" />
                  <Line type="monotone" dataKey="ETH" stroke="#627EEA" />
                  <Line type="monotone" dataKey="BNB" stroke="#F3BA2F" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

