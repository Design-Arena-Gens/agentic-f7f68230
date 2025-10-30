'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Package, Instagram, DollarSign, Star, ShoppingCart, Filter, Download } from 'lucide-react'
import ProductCard from './components/ProductCard'
import AnalyticsDashboard from './components/AnalyticsDashboard'
import FilterPanel from './components/FilterPanel'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    category: 'all',
    priceRange: 'all',
    platform: 'all',
    sortBy: 'score'
  })

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    applyFilters()
  }, [filters, products])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/analyze')
      const data = await response.json()
      setProducts(data.products)
      setFilteredProducts(data.products)
    } catch (error) {
      console.error('Error fetching products:', error)
    }
    setLoading(false)
  }

  const applyFilters = () => {
    let filtered = [...products]

    if (filters.category !== 'all') {
      filtered = filtered.filter(p => p.category === filters.category)
    }

    if (filters.platform !== 'all') {
      filtered = filtered.filter(p => p.platform === filters.platform)
    }

    if (filters.priceRange !== 'all') {
      const [min, max] = filters.priceRange.split('-').map(Number)
      filtered = filtered.filter(p => p.price >= min && p.price <= max)
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'score':
          return b.dropshippingScore - a.dropshippingScore
        case 'price':
          return a.price - b.price
        case 'margin':
          return b.profitMargin - a.profitMargin
        case 'instagram':
          return b.instagramPotential - a.instagramPotential
        default:
          return 0
      }
    })

    setFilteredProducts(filtered)
  }

  const exportData = () => {
    const csv = [
      ['Product', 'Category', 'Platform', 'Price', 'Score', 'Profit Margin', 'Instagram Potential'],
      ...filteredProducts.map(p => [
        p.name,
        p.category,
        p.platform,
        p.price,
        p.dropshippingScore,
        p.profitMargin,
        p.instagramPotential
      ])
    ].map(row => row.join(',')).join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'winning-products.csv'
    a.click()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Indian E-commerce Market Analyzer
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Discover Winning Products for Instagram Dropshipping
          </p>
          <p className="text-sm text-gray-500">
            Analyzing Flipkart, Amazon, Myntra, Meesho & More
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Products</p>
                <p className="text-3xl font-bold text-gray-900">{filteredProducts.length}</p>
              </div>
              <Package className="text-purple-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">High Potential</p>
                <p className="text-3xl font-bold text-gray-900">
                  {filteredProducts.filter(p => p.dropshippingScore >= 85).length}
                </p>
              </div>
              <TrendingUp className="text-green-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-pink-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg Profit Margin</p>
                <p className="text-3xl font-bold text-gray-900">
                  {Math.round(filteredProducts.reduce((acc, p) => acc + p.profitMargin, 0) / filteredProducts.length || 0)}%
                </p>
              </div>
              <DollarSign className="text-pink-500" size={32} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Instagram Ready</p>
                <p className="text-3xl font-bold text-gray-900">
                  {filteredProducts.filter(p => p.instagramPotential >= 8).length}
                </p>
              </div>
              <Instagram className="text-blue-500" size={32} />
            </div>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <AnalyticsDashboard products={filteredProducts} />

        {/* Filter and Export Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <FilterPanel filters={filters} setFilters={setFilters} />
            <button
              onClick={exportData}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              <Download size={20} />
              Export CSV
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500"></div>
            <p className="mt-4 text-gray-600">Analyzing market data...</p>
          </div>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏆 Top Winning Products ({filteredProducts.length})
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={index} product={product} rank={index + 1} />
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
