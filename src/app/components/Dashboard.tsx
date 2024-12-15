import Sidebar from './Sidebar'
import Header from './Header'
import OverviewCards from './OverviewCards'
import RevenueChart from './RevenueChart'
import TopProducts from './TopProducts'
import RecentOrders from './RecentOrders'
import CustomerSegmentation from './CustomerSegmentation'

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium mb-4">Dashboard</h3>
            <OverviewCards />
            <div className="mt-8">
              <RevenueChart />
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              <TopProducts />
              <RecentOrders />
            </div>
            <div className="mt-8">
              <CustomerSegmentation />
            </div>
          </div>
        </main>
      </div>bp
    </div>
  )
}

