import { cx } from '../../utils'
import styles from './list.module.css'

export interface ListProps extends React.ComponentPropsWithoutRef<'ul'> {}

export function List(props: ListProps) {
  return <ul {...props} className={cx(styles.root, props.className)} />
}

export interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {}

export function ListItem(props: ListItemProps) {
  return <li {...props} className={cx(styles.item, props.className)} />
}
