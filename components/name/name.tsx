'use client'

import { useRef, useState } from 'react'
import { H1 } from '../text'
import { Image } from '../image'
import styles from './name.module.css'

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
          style={{
            cursor: 'pointer',
          }}
        >
          {isReal ? 'Ivan Grishin' : 'John Grishin'}
        </span>
      </H1>
      <Image
        ref={photoRef}
        src="/exah.jpg"
        width={640}
        height={640}
        className={styles.root}
        aria-hidden={!isEntered}
      />
    </>
  )
}
