import { cx } from '../../utils'
import styles from './button-base.module.css'

export interface ButtonBaseProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export function ButtonBase(props: ButtonBaseProps) {
  return <button {...props} className={cx(styles.root, props.className)} />
}
