import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react'

const overviewItems = [
  { title: 'Total Revenue', icon: DollarSign, amount: '$54,231', trend: '+14%' },
  { title: 'Active Users', icon: Users, amount: '2,543', trend: '+7%' },
  { title: 'New Orders', icon: ShoppingCart, amount: '170', trend: '+10%' },
  { title: 'Growth Rate', icon: TrendingUp, amount: '21%', trend: '+2.5%' },
]

export default function OverviewCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {overviewItems.map((item) => (
        <Card key={item.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
            <item.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{item.amount}</div>
            <p className="text-xs text-muted-foreground">{item.trend} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

