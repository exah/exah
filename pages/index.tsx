/** @jsxImportSource @emotion/react */

import Head from 'next/head'
import CV from '../CV.md'
import { ContactLinks, Name, Page, PrintButton } from '../components'
import { css } from '@emotion/react'

function Index() {
  return (
    <Page>
      <Head>
        <title>Ivan Grishin — CV</title>
      </Head>
      <header
        css={css`
          grid-area: header;
        `}
      >
        <Name />
      </header>
      <nav
        css={css`
          grid-area: nav;
        `}
      >
        <ContactLinks />
      </nav>
      <main
        css={css`
          grid-area: main;
        `}
      >
        <CV />
      </main>
      <footer
        css={css`
          grid-area: footer;
          margin-top: 2rem;
        `}
      >
        <PrintButton />
      </footer>
    </Page>
  )
}

export default Index
