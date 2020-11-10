import { Global as EmotionGlobal, css } from '@emotion/core'

export const Global = () => (
  <EmotionGlobal
    styles={css`
      :root {
        box-sizing: border-box;
        font-family: 'iA Writer Duospace', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      }

      *,
      ::before,
      ::after {
        box-sizing: inherit;
      }

      html,
      body {
        margin: 0;
        height: 100%;
      }

      #__next {
        min-height: 100%;
      }

      @media print {
        :root {
          font-size: 10px;
        }

        a,
        a:visited {
          text-decoration: underline;
          color: inherit;
        }

        button,
        details {
          display: none;
        }
      }
    `}
  />
)
