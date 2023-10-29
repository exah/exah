import { Settings } from '../components/settings/settings'
import '../styles/global.css'

export const metadata = {
  title: 'Ivan Grishin — CV',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/ia-writer-duospace/fonts.css" />
      </head>
      <body>
        {children}
        <Settings />
      </body>
    </html>
  )
}
