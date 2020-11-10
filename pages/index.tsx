/** @jsxImportSource @emotion/core */

import Head from 'next/head'
import CV from '../CV.md'
import { css } from '@emotion/core'
import { Page, Name, ContactLinks } from '../components'

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
            color: inherit;
            background: none;
            border: none;
            display: block;
            margin: 2rem auto;

            @media print {
              display: none;
            }
          `}
        >
          Print this page 🖨
        </button>
      </main>
    </Page>
  )
}

export default Index
