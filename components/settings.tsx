import styled from '@emotion/styled'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { ButtonBase } from './button-base'
import { Theme } from './theme'

enum ThemeType {
  light = 'light',
  dark = 'dark',
}

const NEXT = {
  [ThemeType.light]: ThemeType.dark,
  [ThemeType.dark]: ThemeType.light,
} as const

const EMOJI = {
  [ThemeType.light]: '🌕',
  [ThemeType.dark]: '🌑',
} as const

const TITLE = {
  [ThemeType.light]: 'Switch to dark theme',
  [ThemeType.dark]: 'Switch to light theme',
} as const

const SettingsButton = styled(ButtonBase)`
  position: fixed;

  right: var(--s-1);
  bottom: var(--s-1);
  z-index: 2;

  display: grid;
  place-items: center;

  width: var(--s-4);
  height: var(--s-4);
`

function restore(): ThemeType {
  return localStorage.getItem('exah/cv/theme') as ThemeType
}

function apply(theme: ThemeType): void {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('exah/cv/theme', theme)
}

function normalize(theme: ThemeType): ThemeType {
  return theme in ThemeType ? theme : ThemeType.light
}

export function Settings() {
  const [theme, setTheme] = useState<ThemeType | null>(null)

  useEffect(() => {
    if (theme === null) {
      setTheme(normalize(restore()))
    } else {
      apply(normalize(theme))
    }
  }, [theme])

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(restore, apply) {
                apply(restore())
              })(${restore}, ${apply})
            `,
          }}
        />
      </Head>
      <Theme />
      {theme && (
        <SettingsButton
          title={TITLE[theme]}
          onClick={() => setTheme(NEXT[theme])}
        >
          <span>{EMOJI[theme]}</span>
        </SettingsButton>
      )}
    </>
  )
}
