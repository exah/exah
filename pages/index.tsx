/** @jsxImportSource @emotion/react */

import CV from '../CV.md'
import { css } from '@emotion/react'
import { Article, ContactLinks, Name, Page, PrintButton } from '../components'

function Index() {
  return (
    <Page title="CV">
      <Article>
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
      </Article>
    </Page>
  )
}

export default Index
