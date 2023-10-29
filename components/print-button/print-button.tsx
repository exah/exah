'use client'

import { ButtonBase } from '../button-base'
import styles from './print-button.module.css'

export function PrintButton() {
  return (
    <ButtonBase className={styles.root} onClick={() => window.print()}>
      Print this page 🖨
    </ButtonBase>
  )
}
