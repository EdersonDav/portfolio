import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --black: #16191E;
    --purple: #7b66fb;
    --green: #00e0b8;
    --blue:#1ea1ef;
    --red:#ff303c;
    --orange:#ff7d43;
    --white:#fff;
    --gray:#d8d8d8;
  }
  html{
    background: var(--black);
    padding: 0 5%;
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
  }
  
  button{
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  a{
    list-style: none;
    font-style: normal;
    color: var(--white);
    &:visited{
      color: var(--white);
    }
  }
  .wrapper{
    max-width: 1280px;
    width: max-content;
    margin: auto;
    @media(max-width: 1205px){
      width: 100%;
    }
  }
`