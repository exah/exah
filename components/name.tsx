/** @jsxImportSource @emotion/react */

import { useRef, useState } from 'react'
import { css } from '@emotion/react'
import { H1 } from './text'
import { Image } from './image'

export function Name() {
  const photoRef = useRef<HTMLImageElement | null>(null)
  const [isEntered, setEntered] = useState<boolean>(false)
  const [isReal, showReal] = useState<boolean>(true)

  function handleClick() {
    showReal((state) => !state)
  }

  let isTouch = false
  function handleTouch() {
    isTouch = true
  }

  function handleEnter() {
    if (isTouch) return
    setEntered(true)
  }

  function handleLeave() {
    if (isTouch) return
    setEntered(false)
  }

  function handleMove(event: React.MouseEvent) {
    if (isEntered && photoRef.current) {
      photoRef.current.style.left = `${event.pageX}px`
    }
  }

  return (
    <>
      <H1>
        <span
          onClick={handleClick}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMove}
          onTouchStart={handleTouch}
          css={css`
            cursor: help;
          `}
        >
          {isReal ? 'Ivan Grishin' : 'John Grishin'}
        </span>
      </H1>
      <Image
        ref={photoRef}
        src="/exah.jpg"
        width={640}
        height={640}
        css={css`
          position: absolute;
          z-index: 1;
          width: min(320px, 50vw);
          height: min(320px, 50vw);
          opacity: 1;
          margin-top: calc(var(--s-2) * -1);
          transition-duration: 0.3s;
          transition-property: opacity, width, height;

          &[aria-hidden='true'] {
            width: 0;
            height: 0;
            opacity: 0;
          }

          @media print {
            display: none;
          }
        `}
        aria-hidden={!isEntered}
      />
    </>
  )
}
