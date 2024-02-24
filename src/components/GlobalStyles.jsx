import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1{
    text-align: center;
    margin: 60px auto 20px;
  }

  h2{
    margin-top: 0;
    margin-bottom: 10px;
  }

  p{
    margin: 10px;
  }

  ul{
    padding-left: 20px
  }

  li{
    margin: 8px 0;
  }
`;
