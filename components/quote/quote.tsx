import { cx } from '../../utils'
import styles from './quote.module.css'

interface QuoteProps extends React.ComponentPropsWithoutRef<'blockquote'> {}

export const Quote = (props: QuoteProps) => (
  <blockquote {...props} className={cx(styles.root, props.className)} />
)
