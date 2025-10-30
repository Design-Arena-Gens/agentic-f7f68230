import { NextResponse } from 'next/server'

// Simulated product database based on Indian e-commerce market analysis
const generateProducts = () => {
  const platforms = ['Flipkart', 'Amazon', 'Myntra', 'Meesho']

  const productTemplates = [
    // Fashion - High Instagram Potential
    {
      name: 'Korean Oversized T-Shirt Combo Pack',
      category: 'Fashion',
      basePrice: 399,
      originalPrice: 1299,
      rating: 4.3,
      reviews: 15234,
      reasons: [
        'Trending Korean fashion style on Instagram',
        'Low shipping cost, lightweight',
        'High perceived value with combo pack',
        'Easy to photograph for social media',
        'Young audience 18-30 loves oversized fits'
      ],
      tags: ['trending', 'lightweight', 'combo-pack', 'unisex'],
      targetAudience: 'Gen Z & Millennials (18-30), Urban youth',
      instagramPotential: 9,
      profitMargin: 65
    },
    {
      name: 'Boho Printed Maxi Dress',
      category: 'Fashion',
      basePrice: 649,
      originalPrice: 2499,
      rating: 4.4,
      reviews: 8921,
      reasons: [
        'Perfect for Instagram-worthy vacation photos',
        'Bohemian style trending on social media',
        'Easy to style and model',
        'Seasonal product with high demand',
        'Good margins with direct sourcing'
      ],
      tags: ['boho', 'photogenic', 'vacation-wear', 'trending'],
      targetAudience: 'Women 20-35, Fashion enthusiasts',
      instagramPotential: 9,
      profitMargin: 70
    },
    {
      name: 'Aesthetic Cargo Pants - Wide Leg',
      category: 'Fashion',
      basePrice: 599,
      originalPrice: 1999,
      rating: 4.2,
      reviews: 12456,
      reasons: [
        'Viral TikTok and Instagram trend',
        'Unisex appeal for wider market',
        'Comfortable streetwear aesthetic',
        'Multiple color options drive repeat sales',
        'Influencer-approved style'
      ],
      tags: ['viral', 'streetwear', 'unisex', 'comfortable'],
      targetAudience: 'Gen Z 16-28, Streetwear fans',
      instagramPotential: 10,
      profitMargin: 68
    },

    // Beauty & Personal Care
    {
      name: 'Korean Glass Skin Serum Set',
      category: 'Beauty & Personal Care',
      basePrice: 449,
      originalPrice: 1799,
      rating: 4.5,
      reviews: 23456,
      reasons: [
        'K-beauty trend dominating Instagram beauty community',
        'Before/after content performs exceptionally well',
        'Compact, easy to ship',
        'High repurchase rate',
        'Influencer collaborations drive sales'
      ],
      tags: ['k-beauty', 'before-after', 'viral', 'skincare'],
      targetAudience: 'Women 18-40, Skincare enthusiasts',
      instagramPotential: 10,
      profitMargin: 72
    },
    {
      name: 'Vitamin C Face Wash with Natural Extracts',
      category: 'Beauty & Personal Care',
      basePrice: 299,
      originalPrice: 899,
      rating: 4.3,
      reviews: 18765,
      reasons: [
        'Vitamin C skincare trending heavily',
        'Natural/organic appeal to conscious buyers',
        'Easy to create educational content',
        'Affordable price point for impulse buys',
        'Works for video demonstrations'
      ],
      tags: ['vitamin-c', 'natural', 'affordable', 'demo-friendly'],
      targetAudience: 'Women & Men 20-45, Health conscious',
      instagramPotential: 8,
      profitMargin: 65
    },

    // Mobile Accessories
    {
      name: 'Aesthetic iPhone Case with Ring Stand',
      category: 'Mobile Accessories',
      basePrice: 199,
      originalPrice: 799,
      rating: 4.2,
      reviews: 34567,
      reasons: [
        'Extremely low cost, very high margins',
        'Easy to ship, lightweight',
        'Multiple designs appeal to different aesthetics',
        'Essential product with constant demand',
        'Perfect for carousel posts showing designs'
      ],
      tags: ['low-cost', 'high-margin', 'lightweight', 'essential'],
      targetAudience: 'Smartphone users 15-35, All genders',
      instagramPotential: 9,
      profitMargin: 78
    },
    {
      name: 'Wireless Earbuds TWS with LED Display',
      category: 'Electronics',
      basePrice: 799,
      originalPrice: 3999,
      rating: 4.1,
      reviews: 28934,
      reasons: [
        'Tech products always trending',
        'LED display creates wow factor for videos',
        'Unboxing content performs well',
        'Affordable alternative to premium brands',
        'Good profit margins from wholesale'
      ],
      tags: ['tech', 'unboxing', 'affordable', 'wow-factor'],
      targetAudience: 'Tech enthusiasts 18-40, All genders',
      instagramPotential: 8,
      profitMargin: 60
    },

    // Home & Kitchen
    {
      name: 'Aesthetic Room LED Strip Lights',
      category: 'Home & Kitchen',
      basePrice: 399,
      originalPrice: 1499,
      rating: 4.4,
      reviews: 19876,
      reasons: [
        'Room transformation content goes viral',
        'Perfect for time-lapse installation videos',
        'Creates visually stunning Instagram stories',
        'Appeals to students and young professionals',
        'Low cost but high perceived value'
      ],
      tags: ['room-decor', 'viral', 'transformation', 'video-worthy'],
      targetAudience: 'Students & young professionals 16-30',
      instagramPotential: 10,
      profitMargin: 70
    },
    {
      name: 'Minimalist Desk Organization Set',
      category: 'Home & Kitchen',
      basePrice: 599,
      originalPrice: 2199,
      rating: 4.3,
      reviews: 11234,
      reasons: [
        'Work-from-home aesthetic trending',
        'Flat lay photography performs excellently',
        'Minimalist design appeals to modern audience',
        'Multiple pieces increase perceived value',
        'Perfect for desk tour content'
      ],
      tags: ['wfh', 'minimalist', 'flatlay', 'organization'],
      targetAudience: 'Professionals 22-40, Students',
      instagramPotential: 9,
      profitMargin: 68
    },

    // Health & Fitness
    {
      name: 'Resistance Bands Set with Bag',
      category: 'Health & Fitness',
      basePrice: 349,
      originalPrice: 1299,
      rating: 4.4,
      reviews: 14567,
      reasons: [
        'Fitness content always trending on Instagram',
        'Easy to demonstrate with workout videos',
        'Compact and lightweight for shipping',
        'Before/after transformation content potential',
        'Growing fitness consciousness in India'
      ],
      tags: ['fitness', 'workout', 'transformation', 'lightweight'],
      targetAudience: 'Fitness enthusiasts 20-45, All genders',
      instagramPotential: 9,
      profitMargin: 72
    },
    {
      name: 'Smart Water Bottle with Time Marker',
      category: 'Health & Fitness',
      basePrice: 449,
      originalPrice: 1499,
      rating: 4.2,
      reviews: 9876,
      reasons: [
        'Health and wellness trending heavily',
        'Aesthetic product for lifestyle photos',
        'Time markers create unique selling point',
        'Motivational quotes appeal to target market',
        'Good for hydration challenge content'
      ],
      tags: ['health', 'aesthetic', 'motivational', 'lifestyle'],
      targetAudience: 'Health conscious 18-40, Gym-goers',
      instagramPotential: 8,
      profitMargin: 65
    },

    // Accessories
    {
      name: 'Layered Chain Necklace Set - Gold Plated',
      category: 'Accessories',
      basePrice: 299,
      originalPrice: 1199,
      rating: 4.3,
      reviews: 16789,
      reasons: [
        'Jewelry content performs exceptionally on Instagram',
        'Layered look is current trend',
        'Easy to model and photograph',
        'Affordable luxury perception',
        'Multiple pieces drive higher order value'
      ],
      tags: ['jewelry', 'trending', 'affordable-luxury', 'photogenic'],
      targetAudience: 'Women 18-35, Fashion lovers',
      instagramPotential: 10,
      profitMargin: 75
    },
    {
      name: 'Vintage Aesthetic Sunglasses',
      category: 'Accessories',
      basePrice: 249,
      originalPrice: 999,
      rating: 4.2,
      reviews: 21345,
      reasons: [
        'Sunglasses essential for Instagram aesthetics',
        'Vintage trend dominating fashion',
        'Very photogenic product',
        'Multiple styles for different face types',
        'Seasonal but year-round demand'
      ],
      tags: ['vintage', 'essential', 'photogenic', 'fashion'],
      targetAudience: 'Fashion conscious 18-35, All genders',
      instagramPotential: 9,
      profitMargin: 70
    },

    // Additional High Potential Products
    {
      name: 'Reusable Silicone Food Storage Bags',
      category: 'Home & Kitchen',
      basePrice: 399,
      originalPrice: 1299,
      rating: 4.4,
      reviews: 8234,
      reasons: [
        'Eco-friendly products trending on social media',
        'Appeals to environmentally conscious buyers',
        'Good for sustainable lifestyle content',
        'Practical product with repeat purchase potential',
        'Educational content opportunities'
      ],
      tags: ['eco-friendly', 'sustainable', 'practical', 'trending'],
      targetAudience: 'Eco-conscious 25-45, Home makers',
      instagramPotential: 7,
      profitMargin: 68
    },
    {
      name: 'Mini Portable Bluetooth Printer',
      category: 'Electronics',
      basePrice: 1299,
      originalPrice: 4999,
      rating: 4.3,
      reviews: 6543,
      reasons: [
        'Unique gadget with wow factor',
        'Great for demonstration videos',
        'Appeals to students and creative professionals',
        'Instant gratification product',
        'Scrapbooking and journaling trend'
      ],
      tags: ['gadget', 'unique', 'creative', 'demonstration'],
      targetAudience: 'Students & creatives 18-30',
      instagramPotential: 8,
      profitMargin: 58
    },
    {
      name: 'Silk Scrunchies Set - Aesthetic Colors',
      category: 'Accessories',
      basePrice: 199,
      originalPrice: 699,
      rating: 4.2,
      reviews: 19876,
      reasons: [
        'Extremely affordable with high margins',
        'Silk scrunchies trending for hair health',
        'Perfect for flat lay product photos',
        'Multiple color sets drive higher value',
        'Easy to ship, virtually no weight'
      ],
      tags: ['affordable', 'high-margin', 'trending', 'lightweight'],
      targetAudience: 'Women 15-35, Hair care enthusiasts',
      instagramPotential: 8,
      profitMargin: 80
    },
    {
      name: 'Motivational Wall Posters Set',
      category: 'Home & Kitchen',
      basePrice: 299,
      originalPrice: 1199,
      rating: 4.3,
      reviews: 12456,
      reasons: [
        'Room transformation content goes viral',
        'Inspirational content performs well',
        'Easy to photograph in styled settings',
        'Appeals to students and young professionals',
        'Digital print on demand possible'
      ],
      tags: ['inspirational', 'room-decor', 'viral', 'affordable'],
      targetAudience: 'Students & young professionals 16-30',
      instagramPotential: 7,
      profitMargin: 75
    }
  ]

  const products: any[] = []

  productTemplates.forEach((template, index) => {
    // Create 2-3 variations per template across different platforms
    const numVariations = Math.floor(Math.random() * 2) + 2

    for (let i = 0; i < numVariations; i++) {
      const platform = platforms[Math.floor(Math.random() * platforms.length)]
      const priceVariation = Math.floor(Math.random() * 100) - 50
      const price = Math.max(template.basePrice + priceVariation, 99)
      const discount = Math.round(((template.originalPrice - price) / template.originalPrice) * 100)

      // Calculate dropshipping score based on multiple factors
      const scoreFactors = {
        margin: template.profitMargin / 100,
        instagramPotential: template.instagramPotential / 10,
        rating: template.rating / 5,
        pricePoint: price < 1000 ? 1 : 0.8, // Lower price = better for dropshipping
        shippingEase: template.tags.includes('lightweight') ? 1 : 0.8
      }

      const dropshippingScore = Math.round(
        (scoreFactors.margin * 30 +
        scoreFactors.instagramPotential * 30 +
        scoreFactors.rating * 20 +
        scoreFactors.pricePoint * 10 +
        scoreFactors.shippingEase * 10) * 100
      )

      products.push({
        ...template,
        id: `${index}-${i}`,
        platform,
        price,
        discount,
        dropshippingScore,
        imageUrl: `/placeholder-${template.category.toLowerCase().replace(/ /g, '-')}.jpg`
      })
    }
  })

  // Sort by dropshipping score
  return products.sort((a, b) => b.dropshippingScore - a.dropshippingScore)
}

export async function GET() {
  try {
    const products = generateProducts()

    return NextResponse.json({
      success: true,
      products,
      totalProducts: products.length,
      timestamp: new Date().toISOString(),
      platforms: ['Flipkart', 'Amazon', 'Myntra', 'Meesho'],
      categories: Array.from(new Set(products.map(p => p.category)))
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to analyze products' },
      { status: 500 }
    )
  }
}
