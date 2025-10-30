import { TrendingUp, Instagram, DollarSign, Star, Package, AlertCircle } from 'lucide-react'

interface Product {
  name: string
  category: string
  platform: string
  price: number
  originalPrice: number
  discount: number
  rating: number
  reviews: number
  dropshippingScore: number
  profitMargin: number
  instagramPotential: number
  reasons: string[]
  tags: string[]
  targetAudience: string
  imageUrl: string
}

export default function ProductCard({ product, rank }: { product: Product; rank: number }) {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100'
    if (score >= 75) return 'text-blue-600 bg-blue-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-gray-600 bg-gray-100'
  }

  const getPlatformColor = (platform: string) => {
    const colors: any = {
      'Flipkart': 'bg-yellow-100 text-yellow-800',
      'Amazon': 'bg-orange-100 text-orange-800',
      'Myntra': 'bg-pink-100 text-pink-800',
      'Meesho': 'bg-purple-100 text-purple-800',
      'Others': 'bg-gray-100 text-gray-800'
    }
    return colors[platform] || colors['Others']
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
      {/* Rank Badge */}
      {rank <= 3 && (
        <div className="absolute top-4 left-4 z-10">
          <div className={`
            ${rank === 1 ? 'bg-yellow-500' : ''}
            ${rank === 2 ? 'bg-gray-400' : ''}
            ${rank === 3 ? 'bg-orange-600' : ''}
            text-white font-bold px-3 py-1 rounded-full text-sm shadow-lg
          `}>
            #{rank}
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
        <Package size={64} className="text-purple-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title and Platform */}
        <div className="mb-3">
          <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`text-xs px-2 py-1 rounded-full ${getPlatformColor(product.platform)}`}>
              {product.platform}
            </span>
            <span className="text-xs px-2 py-1 rounded-full bg-indigo-100 text-indigo-800">
              {product.category}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                {product.discount}% OFF
              </span>
            </>
          )}
        </div>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-yellow-500" />
            <span className="font-semibold text-gray-900">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews.toLocaleString()} reviews)</span>
        </div>

        {/* Scores */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center">
            <div className={`text-xl font-bold ${getScoreColor(product.dropshippingScore)}`}>
              {product.dropshippingScore}
            </div>
            <div className="text-xs text-gray-500">Score</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-green-600">
              {product.profitMargin}%
            </div>
            <div className="text-xs text-gray-500">Margin</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-pink-600">
              {product.instagramPotential}/10
            </div>
            <div className="text-xs text-gray-500">IG Score</div>
          </div>
        </div>

        {/* Target Audience */}
        <div className="mb-3 p-2 bg-purple-50 rounded-lg">
          <p className="text-xs text-purple-900">
            <span className="font-semibold">Target:</span> {product.targetAudience}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1">
          {product.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Reasons */}
        <div className="border-t pt-3">
          <p className="text-xs font-semibold text-gray-700 mb-2">Why This Product Wins:</p>
          <ul className="space-y-1">
            {product.reasons.slice(0, 3).map((reason, i) => (
              <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                <TrendingUp size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition flex items-center justify-center gap-2">
          <Instagram size={18} />
          Start Promoting
        </button>
      </div>
    </div>
  )
}
