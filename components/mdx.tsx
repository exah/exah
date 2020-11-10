import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './code'
import { Text, H1, H2, H3, H4, H5, H6 } from './text'
import { List, ListItem } from './list'
import { Summary } from './summary'

const COMPONENTS = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Text,
  ul: List,
  li: ListItem,
  inlineCode: Code,
  summary: Summary,
}

interface Props {
  children: React.ReactNode
}

export const MDX = (props: Props) => (
  <MDXProvider components={COMPONENTS} {...props} />
)
