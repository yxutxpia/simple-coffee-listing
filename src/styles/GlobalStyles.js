import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root {
  --color-dark-black: #111315;
  --color-light-black: #1b1d1f;
  --color-gray: #6f757c;
  --color-light-green: #bee3cc;
  --color-pale-yellow: #fef7ee;
  --color-yellow: #f6c768;
  --color-orange: #ed735d;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: var(--color-pale-yellow);
  font-family: 'DM Sans', sans-serif;
  line-height: 1;
  background-color: var(--color-dark-black);
}
`;

export default GlobalStyles;
