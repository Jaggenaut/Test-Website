import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Ahead App',
  description: 'Master your life by mastering your emotions',
}

const poppins = Montserrat({
  weight: '400',
  preload: false
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.className} >
      <body >{children}</body>
    </html>
  )
}
