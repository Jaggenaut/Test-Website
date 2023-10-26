import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ahead App',
  description: 'Master your life by mastering your emotions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
