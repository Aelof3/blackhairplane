import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Black Hairplane',
  description: 'blackairplane.com',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://blackhairplane.com/"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Black Hairplane"/>
        <meta property="og:description" content="blackairplane.com"/>
        <meta property="og:image" content="https://blackhairplane.com/og-1024x576.png"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="twitter:domain" content="blackhairplane.com"/>
        <meta property="twitter:url" content="https://blackhairplane.com/"/>
        <meta name="twitter:title" content="Black Hairplane"/>
        <meta name="twitter:description" content="blackairplane.com"/>
        <meta name="twitter:image" content="https://blackhairplane.com/og-1024x576.png"/>
      </head>
              
      <body className={inter.className}>{children}</body>
    </html>
  )
}
