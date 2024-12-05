'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowUpCircle, ArrowDownCircle } from 'lucide-react'

export default function Wallet() {
  const [depositAmount, setDepositAmount] = useState('')
  const [withdrawAmount, setWithdrawAmount] = useState('')

  const handleDeposit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Deposit:', depositAmount)
    setDepositAmount('')
  }

  const handleWithdraw = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Withdraw:', withdrawAmount)
    setWithdrawAmount('')
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-300">Demo Account (Disabled)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-gray-400">100,000 USD</p>
          <p className="text-sm text-gray-500 mt-2">This demo account is for display purposes only and cannot be used for trading.</p>
          <Button className="mt-4 w-full bg-gray-700 text-gray-400 cursor-not-allowed" disabled>
            Demo Trading Disabled
          </Button>
        </CardContent>
      </Card>
      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-300">PKR Account</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-gray-100">0 PKR</p>
          <div className="mt-4 space-y-4">
            <form onSubmit={handleDeposit}>
              <Label htmlFor="deposit" className="text-gray-300">Deposit Amount</Label>
              <div className="flex mt-1.5">
                <Input
                  id="deposit"
                  placeholder="Enter amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  className="bg-gray-700 text-white mr-2"
                />
                <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                  <ArrowUpCircle className="mr-2 h-4 w-4" /> Deposit
                </Button>
              </div>
            </form>
            <form onSubmit={handleWithdraw}>
              <Label htmlFor="withdraw" className="text-gray-300">Withdraw Amount</Label>
              <div className="flex mt-1.5">
                <Input
                  id="withdraw"
                  placeholder="Enter amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                  className="bg-gray-700 text-white mr-2"
                />
                <Button type="submit" className="bg-gray-500 hover:bg-gray-600">
                  <ArrowDownCircle className="mr-2 h-4 w-4" /> Withdraw
                </Button>
              </div>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

