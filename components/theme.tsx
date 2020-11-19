import { Global as EmotionGlobal, css } from '@emotion/react'

const lightTheme = css`
  --c-fg: black;
  --c-bg: white;
  --c-link-base: blue;
  --c-link-visited: purple;
`

const darkTheme = css`
  --c-fg: white;
  --c-bg: black;
  --c-link-base: royalblue;
  --c-link-visited: dimgray;
`

export const Theme = () => (
  <EmotionGlobal
    styles={css`
      [data-theme='light']:root {
        color-scheme: light;
        ${lightTheme}
      }

      [data-theme='dark']:root {
        color-scheme: dark;
        ${darkTheme}
      }
    `}
  />
)
