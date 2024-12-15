import { Home, BarChart2, Users, ShoppingBag, Settings } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: BarChart2, label: 'Analytics', href: '/analytics' },
  { icon: Users, label: 'Customers', href: '/customers' },
  { icon: ShoppingBag, label: 'Products', href: '/products' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export default function Sidebar() {
  return (
    <aside className="bg-white w-64 min-h-screen p-4 border-r border-gray-200">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center space-x-2 px-4 py-2 rounded hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-900">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

