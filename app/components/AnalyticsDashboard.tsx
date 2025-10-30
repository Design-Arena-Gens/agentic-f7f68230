'use client'

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts'

export default function AnalyticsDashboard({ products }: { products: any[] }) {
  // Category distribution
  const categoryData = products.reduce((acc: any, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1
    return acc
  }, {})

  const categoryChartData = Object.entries(categoryData).map(([name, value]) => ({
    name,
    count: value
  }))

  // Platform distribution
  const platformData = products.reduce((acc: any, product) => {
    acc[product.platform] = (acc[product.platform] || 0) + 1
    return acc
  }, {})

  const platformChartData = Object.entries(platformData).map(([name, value]) => ({
    name,
    value
  }))

  // Price range analysis
  const priceRanges = [
    { range: '₹0-500', min: 0, max: 500 },
    { range: '₹500-1000', min: 500, max: 1000 },
    { range: '₹1000-2000', min: 1000, max: 2000 },
    { range: '₹2000-5000', min: 2000, max: 5000 },
    { range: '₹5000+', min: 5000, max: Infinity }
  ]

  const priceRangeData = priceRanges.map(({ range, min, max }) => ({
    range,
    count: products.filter(p => p.price >= min && p.price < max).length,
    avgScore: Math.round(
      products.filter(p => p.price >= min && p.price < max)
        .reduce((acc, p) => acc + p.dropshippingScore, 0) /
      products.filter(p => p.price >= min && p.price < max).length || 0
    )
  }))

  const COLORS = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#EC4899']

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Analytics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Category Distribution */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Products by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8B5CF6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Platform Distribution */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Platform Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={platformChartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {platformChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Price Range Analysis */}
        <div className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Price Range vs Dropshipping Score</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={priceRangeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="range" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="count" stroke="#8B5CF6" strokeWidth={2} name="Product Count" />
              <Line yAxisId="right" type="monotone" dataKey="avgScore" stroke="#10B981" strokeWidth={2} name="Avg Score" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
