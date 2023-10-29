import { Code } from './components/code'
import type { MDXComponents } from 'mdx/types'
import { Paragraph, H1, H2, H3, H4, H5, H6 } from './components/text/text'
import { List, ListItem } from './components/list'
import { Summary } from './components/summary/summary'

const COMPONENTS = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  ul: List,
  li: ListItem,
  inlineCode: Code,
  summary: Summary,
}

export const useMDXComponents = (components: MDXComponents) => ({
  ...COMPONENTS,
  ...components,
})
