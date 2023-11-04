import { forwardRef } from 'react'
import styles from './image.module.css'

export interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    return <img ref={ref} className={styles.root} {...props} />
  }
)
