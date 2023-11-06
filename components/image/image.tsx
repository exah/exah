import { forwardRef } from 'react'
import { cx } from '../../utils'
import styles from './image.module.css'

export interface ImageProps extends React.ComponentPropsWithoutRef<'img'> {}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  function Image(props, ref) {
    return (
      <img ref={ref} {...props} className={cx(styles.root, props.className)} />
    )
  }
)
