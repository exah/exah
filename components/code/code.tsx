import { cx } from '../../utils'
import styles from './code.module.css'

export interface CodeProps extends React.ComponentPropsWithoutRef<'code'> {}

export function Code(props: CodeProps) {
  return <code {...props} className={cx(styles.root, props.className)} />
}
