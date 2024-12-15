import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

const orders = [
  { id: 1, customer: 'John Doe', product: 'Product A', amount: '$120.00', status: 'Completed' },
  { id: 2, customer: 'Jane Smith', product: 'Product B', amount: '$75.50', status: 'Pending' },
  { id: 3, customer: 'Bob Johnson', product: 'Product C', amount: '$200.00', status: 'Completed' },
  { id: 4, customer: 'Alice Brown', product: 'Product D', amount: '$50.00', status: 'Processing' },
]

export default function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

