import Head from 'next/head'
import styled from '@emotion/styled'
import { Global } from './global'
import { MDX } from './mdx'

interface Props {
  children: React.ReactNode
}

const PageGrid = styled('div')`
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'header header header nav'
    'main main main main'
    'footer footer footer footer';

  max-width: 80ch;
  margin: 0 auto;
  padding: 1rem 1rem 3rem;
`

export const Page = ({ children }: Props) => (
  <MDX>
    <Global />
    <Head>
      <title>Ivan Grishin</title>
      <link rel="stylesheet" href="/ia-writer-duospace/fonts.css" />
    </Head>
    <PageGrid>{children}</PageGrid>
  </MDX>
)
