import styled from '@emotion/styled'

export const List = styled('ul')`
  list-style: none;
  padding: 0;
  margin: var(--s-2) 0;
`

export const ListItem = styled('li')`
  padding-left: 2ch;
  margin-bottom: var(--s-1);

  ::before {
    content: '- ';
    position: absolute;
    margin-left: -2ch;
  }

  ${List} {
    margin-top: var(--s-1);
    margin-left: 2ch;
  }
`
