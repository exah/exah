import { cx } from '../../utils'
import styles from './summary.module.css'

export interface SummaryProps
  extends React.ComponentPropsWithoutRef<'summary'> {}

export function Summary(props: SummaryProps) {
  return <summary {...props} className={cx(styles.root, props.className)} />
}
