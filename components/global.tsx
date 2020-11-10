import { Global as EmotionGlobal, css } from '@emotion/core'

export const Global = () => (
  <EmotionGlobal
    styles={css`
      :root {
        --fg: black;
        --bg: white;
        --link: blue;

        box-sizing: border-box;
        font-family: 'iA Writer Duospace', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

        color: var(--fg, white);
        background: var(--bg, white);
      }

      *,
      ::before,
      ::after {
        box-sizing: inherit;
      }

      :link {
        color: var(--link, blue);
      }

      html,
      body {
        margin: 0;
      }

      @media screen and (max-width: 500px) {
        :root {
          font-size: 13px;
        }
      }

      @media print {
        :root {
          font-size: 10px;
        }

        :link,
        :visited {
          text-decoration: underline;
          color: inherit;
        }
      }
    `}
  />
)
