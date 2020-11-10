import { useState } from 'react'
import { H1 } from './text'

export function Name() {
  const [isReal, showReal] = useState<boolean>(true)

  return (
    <H1 onClick={() => showReal((state) => !state)}>
      {isReal ? 'Ivan Grishin' : 'John Grishin'}
    </H1>
  )
}
