const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: { format: 'mdx' },
})

module.exports = withMDX({
  experimental: {
    mdxRs: true,
  },
})
