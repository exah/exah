import styled from '@emotion/styled'

export const Article = styled('article')`
  display: grid;

  grid-column-gap: var(--s-2);
  grid-auto-columns: 1fr;
  grid-template-areas: var(--g-article);

  max-width: var(--s-article);
  padding: var(--s-2) var(--s-2) var(--s-6);
  margin: 0 auto;
`
