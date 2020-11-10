import styled from '@emotion/styled'

export const List = styled('ul')`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`

export const ListItem = styled('li')`
  padding-left: 2ch;
  margin-bottom: 0.5rem;

  ::before {
    content: '- ';
    position: absolute;
    margin-left: -2ch;
  }

  ${List} {
    margin-top: 0.5rem;
    margin-left: 2ch;
  }
`
