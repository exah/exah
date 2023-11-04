import type { Metadata } from 'next'
import { Settings } from '../components/settings/settings'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Ivan Grishin',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="stylesheet" href="/ia-writer-duospace/fonts.css" />
      </head>
      <body>
        <Settings />
        {children}
      </body>
    </html>
  )
}
