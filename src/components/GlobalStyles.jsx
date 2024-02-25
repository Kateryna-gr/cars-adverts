import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  --font-family: "Manrope", sans-serif;
  --primaryTextColor:  #121417;
  --secondaryTextColor: rgba(18, 20, 23, 0.5);
  --conditionTextColor: #363535;
  --conditionBgColor: #f9f9f9;
  --whiteColor: #fff;
  --accent-color: #3470ff;
  --accent-hover-color: #0b44cd;
  --filterTitleColor: #8a8a89;
  --filterBackground: #f7f7fb;
  --filterUnactiveColor: rgba(18, 20, 23, 0.2);
  --buttonTextColor: #fff;
}

body {
  margin: 0;
  font-style: normal;
  font-weight: 400;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
}

.button {
  cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}
`;
