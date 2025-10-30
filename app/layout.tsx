import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Indian E-commerce Market Analyzer',
  description: 'Find winning dropshipping products for Instagram promotion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
