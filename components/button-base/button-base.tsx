import styles from './button-base.module.css'

export interface ButtonBaseProps
  extends React.ComponentPropsWithoutRef<'button'> {}

export function ButtonBase({ className = '', ...rest }: ButtonBaseProps) {
  return <button className={[styles.root, className].join(' ')} {...rest} />
}
