import remarkMdxDisableExplicitJsx from 'remark-mdx-disable-explicit-jsx'
import nextMDX from '@next/mdx'

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: { format: 'mdx', remarkPlugins: [remarkMdxDisableExplicitJsx] },
})

export default withMDX()
