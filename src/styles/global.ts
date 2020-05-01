import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {
  -webkit-font-smoothing: antialiased;
  color: #FFF;
  background: #312E38;
}
body, input, button {
  font: 'Roboto Slab', serif;
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button{
  cursor: pointer;
}
`;
