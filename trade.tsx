'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown } from 'lucide-react'

export default function Trade() {
  const [orderType, setOrderType] = useState('buy')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e: React.FormEvent, direction: 'up' | 'down') => {
    e.preventDefault()
    // Here you would typically send the order to your backend
    console.log('Order submitted:', { orderType, amount, price, direction })
    // Reset form
    setAmount('')
    setPrice('')
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-300">Market Data</CardTitle>
        </CardHeader>
        <CardContent className="text-gray-300">
          <p>Current Price: $29,345.67</p>
          <p>24h High: $30,123.45</p>
          <p>24h Low: $28,987.65</p>
          <p>24h Volume: 1,234.56 BTC</p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-gray-300">Place Order</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <RadioGroup defaultValue="buy" className="flex mb-4 text-gray-300" onValueChange={setOrderType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="buy" id="buy" />
                <Label htmlFor="buy">Buy</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="sell" id="sell" />
                <Label htmlFor="sell">Sell</Label>
              </div>
            </RadioGroup>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="amount" className="text-gray-300">Amount</Label>
                <Input id="amount" placeholder="Enter amount" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-gray-700 text-white" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="price" className="text-gray-300">Price</Label>
                <Input id="price" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)} className="bg-gray-700 text-white" />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <Button className="w-[48%] bg-green-500 hover:bg-green-600" onClick={(e) => handleSubmit(e, 'up')}>
                <ArrowUp className="mr-2 h-4 w-4" /> Up
              </Button>
              <Button className="w-[48%] bg-red-500 hover:bg-red-600" onClick={(e) => handleSubmit(e, 'down')}>
                <ArrowDown className="mr-2 h-4 w-4" /> Down
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

