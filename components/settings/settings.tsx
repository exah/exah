'use client'

import Head from 'next/head'
import Script from 'next/script'
import { useState, useEffect } from 'react'
import { ButtonBase } from '../button-base'
import styles from './settings.module.css'
import '../../styles/themes.css'

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
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(restore, apply) {
                apply(restore())
              })(${restore}, ${apply})
            `,
          }}
        />
      </Head>
      {theme && (
        <ButtonBase
          className={styles.root}
          title={TITLE[theme]}
          onClick={() => setTheme(NEXT[theme])}
        >
          <span>{EMOJI[theme]}</span>
        </ButtonBase>
      )}
    </>
  )
}
