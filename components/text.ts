import styled from '@emotion/styled'

export const Text = styled('p')`
  margin: var(--s-2) 0;

  &:first-of-type {
    margin-top: 0;
  }
`

export const H1 = styled(Text)``

H1.defaultProps = { as: 'h1' }

export const H2 = styled(Text)`
  margin-top: var(--s-5);
  margin-bottom: var(--s-3);
`

H2.defaultProps = { as: 'h2' }

export const H3 = styled(Text)`
  margin-top: var(--s-4);
`

H3.defaultProps = { as: 'h3' }

export const H4 = styled(Text)``

H4.defaultProps = { as: 'h4' }

export const H5 = styled(Text)``

H5.defaultProps = { as: 'h5' }

export const H6 = styled(Text)``

H6.defaultProps = { as: 'h6' }
