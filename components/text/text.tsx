import { cx } from '../../utils'
import styles from './text.module.css'

export interface ParagraphProps extends React.ComponentPropsWithoutRef<'p'> {}

export const Paragraph = (props: ParagraphProps) => (
  <p {...props} className={cx(styles.root, props.className)} />
)

export interface H1Props extends React.ComponentPropsWithoutRef<'h1'> {}

export const H1 = (props: H1Props) => (
  <h1 {...props} className={cx(styles.root, props.className)} />
)

export interface H2Props extends React.ComponentPropsWithoutRef<'h2'> {}

export const H2 = (props: H1Props) => (
  <h2 {...props} className={cx(styles.root, styles.h2, props.className)} />
)

export interface H3Props extends React.ComponentPropsWithoutRef<'h3'> {}

export const H3 = (props: H1Props) => (
  <h3 {...props} className={cx(styles.root, styles.h3, props.className)} />
)

export interface H4Props extends React.ComponentPropsWithoutRef<'h4'> {}

export const H4 = (props: H4Props) => (
  <h4 {...props} className={cx(styles.root, props.className)} />
)

export interface H5Props extends React.ComponentPropsWithoutRef<'h5'> {}

export const H5 = (props: H5Props) => (
  <h5 {...props} className={cx(styles.root, props.className)} />
)

export interface H6Props extends React.ComponentPropsWithoutRef<'h6'> {}

export const H6 = (props: H6Props) => (
  <h5 {...props} className={cx(styles.root, props.className)} />
)
