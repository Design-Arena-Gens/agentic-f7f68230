import { Filter } from 'lucide-react'

interface FilterProps {
  filters: {
    category: string
    priceRange: string
    platform: string
    sortBy: string
  }
  setFilters: (filters: any) => void
}

export default function FilterPanel({ filters, setFilters }: FilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex items-center gap-2">
        <Filter size={20} className="text-gray-600" />
        <span className="font-semibold text-gray-700">Filters:</span>
      </div>

      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="all">All Categories</option>
        <option value="Fashion">Fashion</option>
        <option value="Electronics">Electronics</option>
        <option value="Home & Kitchen">Home & Kitchen</option>
        <option value="Beauty & Personal Care">Beauty & Personal Care</option>
        <option value="Health & Fitness">Health & Fitness</option>
        <option value="Accessories">Accessories</option>
        <option value="Mobile Accessories">Mobile Accessories</option>
      </select>

      <select
        value={filters.platform}
        onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="all">All Platforms</option>
        <option value="Flipkart">Flipkart</option>
        <option value="Amazon">Amazon</option>
        <option value="Myntra">Myntra</option>
        <option value="Meesho">Meesho</option>
      </select>

      <select
        value={filters.priceRange}
        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="all">All Prices</option>
        <option value="0-500">₹0 - ₹500</option>
        <option value="500-1000">₹500 - ₹1,000</option>
        <option value="1000-2000">₹1,000 - ₹2,000</option>
        <option value="2000-5000">₹2,000 - ₹5,000</option>
        <option value="5000-999999">₹5,000+</option>
      </select>

      <select
        value={filters.sortBy}
        onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="score">Sort by Score</option>
        <option value="price">Sort by Price</option>
        <option value="margin">Sort by Margin</option>
        <option value="instagram">Sort by Instagram Potential</option>
      </select>
    </div>
  )
}
