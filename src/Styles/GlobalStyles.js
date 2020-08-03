import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

${reset}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border :0;
}

ul, li {
  list-style : none;
}

a {
  text-decoration : none;
}

`;

export default GlobalStyles;
