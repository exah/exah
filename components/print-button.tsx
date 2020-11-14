/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { ButtonBase } from './button-base'

export const PrintButton = () => (
  <ButtonBase
    onClick={() => window.print()}
    css={css`
      margin: auto;

      @media print {
        display: none;
      }
    `}
  >
    Print this page 🖨
  </ButtonBase>
)
