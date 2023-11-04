import type { Metadata } from 'next'
import CV from '../CV.md'
import { Article, ContactLinks, Name, PrintButton } from '../components'

export const metadata: Metadata = {
  title: 'Ivan Grishin — CV',
  description: 'Web Software Engineer with ~12 years of experience',
}

function Index() {
  return (
    <Article>
      <header
        style={{
          gridArea: 'header',
        }}
      >
        <Name />
      </header>
      <nav
        style={{
          gridArea: 'nav',
        }}
      >
        <ContactLinks />
      </nav>
      <main
        style={{
          gridArea: 'main',
        }}
      >
        <CV />
      </main>
      <footer
        style={{
          gridArea: 'footer',
          marginTop: '2rem',
        }}
      >
        <PrintButton />
      </footer>
    </Article>
  )
}

export default Index
