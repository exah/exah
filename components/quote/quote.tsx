import { cx } from '../../utils'
import styles from './quote.module.css'

interface QuoteProps extends React.ComponentPropsWithoutRef<'blockquote'> {}

export const Quote = ({ className, ...rest }: QuoteProps) => (
  <blockquote className={cx(styles.root, className)} {...rest} />
)
