import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const marketData = [
  { pair: 'BTC/USDT', price: '29,345.67', change: '+2.5%' },
  { pair: 'ETH/USDT', price: '1,845.23', change: '-0.8%' },
  { pair: 'BNB/USDT', price: '312.45', change: '+1.2%' },
  { pair: 'ADA/USDT', price: '0.3789', change: '+3.7%' },
  { pair: 'XRP/USDT', price: '0.4567', change: '-1.5%' },
]

export default function Market() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Market Overview</h2>
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-800">
            <TableHead className="text-gray-300">Pair</TableHead>
            <TableHead className="text-gray-300">Price</TableHead>
            <TableHead className="text-gray-300">24h Change</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {marketData.map((item) => (
            <TableRow key={item.pair} className="bg-gray-700">
              <TableCell className="font-medium text-gray-300">{item.pair}</TableCell>
              <TableCell className="text-gray-300">${item.price}</TableCell>
              <TableCell className={item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                {item.change}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

