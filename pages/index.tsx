/** @jsxImportSource @emotion/core */

import Head from 'next/head'
import CV from '../CV.md'
import { css } from '@emotion/core'
import { Page, H1, ContactLinks } from '../components'

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
        <H1>Ivan Grishin</H1>
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
          grid-area: content;
        `}
      >
        <CV />
        <button
          onClick={() => window.print()}
          css={css`
            font: inherit;
            cursor: pointer;

            appearance: none;
            background: none;
            border: none;
            display: block;
            margin: 2rem auto;
          `}
        >
          Print this page 🖨
        </button>
      </main>
    </Page>
  )
}

export default Index
