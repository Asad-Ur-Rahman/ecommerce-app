import Wrapper from '@/components/shared/Wrapper'
import './globals.css'
import Navbar from '@/components/views/Navbar'
import type { Metadata } from 'next'
import { Maven_Pro } from 'next/font/google'

const inter = Maven_Pro({
  subsets: ['latin'],
  weight: ["400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: 'Dine Market',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Navbar />
          {children}
        </Wrapper>
      </body>
    </html>
  )
}
