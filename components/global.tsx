import { Global as EmotionGlobal, css } from '@emotion/react'

export const Global = () => (
  <EmotionGlobal
    styles={css`
      :root {
        --s-rem: initial;
        --s-step: 0.5rem;
        --s-article: 80ch;
        --s-1: calc(var(--s-step, 0) * 1);
        --s-2: calc(var(--s-step, 0) * 2);
        --s-3: calc(var(--s-step, 0) * 3);
        --s-4: calc(var(--s-step, 0) * 4);
        --s-5: calc(var(--s-step, 0) * 5);
        --s-6: calc(var(--s-step, 0) * 6);

        --c-fg: black;
        --c-bg: white;
        --c-link: blue;

        --f-system: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          Helvetica, Arial;
        --f-brand: 'iA Writer Duospace';
        --g-article: 'header header header nav' 'main main main main'
          'footer footer footer footer';

        @media screen and (max-width: 500px) {
          --s-rem: 13px;
          --g-article: 'header nav' 'main main' 'footer footer';
        }

        @media print {
          --s-rem: 7.5pt;
        }
      }

      *,
      ::before,
      ::after {
        box-sizing: inherit;
      }

      :root {
        box-sizing: border-box;
        font-family: var(--f-brand, ''), var(--f-system, ''), sans-serif;
        font-size: var(--s-rem, 100%);
        color: var(--c-fg, black);
        background: var(--c-bg, white);
        text-size-adjust: 100%;
      }

      :link {
        color: var(--c-link, blue);
      }

      :link,
      :visited {
        @media print {
          text-decoration: underline;
          color: inherit;
        }
      }

      html,
      body {
        margin: 0;
      }
    `}
  />
)
