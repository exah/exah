import Head from 'next/head'
import { Global } from './global'
import { Settings } from './settings'
import { MDX } from './mdx'

interface Props {
  title: string
  children: React.ReactNode
}

export const Page = ({ title, children }: Props) => (
  <MDX>
    <Global />
    <Settings />
    <Head>
      <title>Ivan Grishin — {title}</title>
      <link rel="stylesheet" href="/ia-writer-duospace/fonts.css" />
    </Head>
    {children}
  </MDX>
)
