import { List, ListItem } from './list'

const CONTACT_LINKS = [
  {
    name: 'hello@johngrish.in',
    url: 'mailto:hello@johngrish.in?subject=CV',
  },
  {
    name: 'github.com/exah',
    url: 'https://github.com/exah',
  },
  {
    name: 'twitter.com/exah',
    url: 'https://twitter.com/exah',
  },
  {
    name: 'codepen.io/exah',
    url: 'https://codepen.io/exah',
  },
  {
    name: 'linkedin.com/in/exah',
    url: 'https://linkedin.com/in/exah',
  },
]

export function ContactLinks() {
  return (
    <List>
      {CONTACT_LINKS.map((item) => (
        <ListItem>
          <a href={item.url} target="blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </ListItem>
      ))}
    </List>
  )
}
