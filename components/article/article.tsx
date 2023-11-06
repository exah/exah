import { cx } from '../../utils'
import styles from './article.module.css'

export interface ArticleProps
  extends React.ComponentPropsWithoutRef<'article'> {}

export function Article(props: ArticleProps) {
  return <article {...props} className={cx(styles.root, props.className)} />
}
