import styled from '@emotion/styled'

export const Text = styled('p')`
  margin: 1rem 0;

  &:first-child {
    margin-top: 0;
  }
`

export const H1 = Text.withComponent('h1')

export const H2 = styled(Text.withComponent('h2'))`
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`

export const H3 = styled(Text.withComponent('h3'))`
  margin-top: 2rem;
`

export const H4 = Text.withComponent('h4')

export const H5 = Text.withComponent('h5')

export const H6 = Text.withComponent('h6')
