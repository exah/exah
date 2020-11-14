import styled from '@emotion/styled'

export const Summary = styled('summary')`
  list-style-type: none;
  font-weight: bold;

  ::-webkit-details-marker {
    display: none;
  }

  @media screen {
    ::before {
      content: '+ ';

      details[open] & {
        content: '- ';
      }
    }
  }

  @media print {
    details:not([open]) & {
      display: none;
    }
  }
`
