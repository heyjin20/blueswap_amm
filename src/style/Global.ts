import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};

    font-family:'Rubik', 'Nunito'

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
