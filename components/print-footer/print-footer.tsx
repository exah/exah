import { Paragraph } from '../text'
import styles from './print-footer.module.css'

export function PrintFooter() {
  return (
    <Paragraph className={styles.root}>
      Read more on <a href="https://cv.exah.me">cv.exah.me</a>.
    </Paragraph>
  )
}
