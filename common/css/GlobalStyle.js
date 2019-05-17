import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body,html,h1,h2,h3,h4,h5,p{
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
`
