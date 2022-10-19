import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --black: #16191E;
    --purple: #7b66fb;
    --green: #00e0b8;
    --blue:#1ea1ef;
    --red:#ff303c;
    --orange:#ff7d43;
    --txt-1:#fff;
    --shape:#fff;
    --gray:#d8d8d8;
    --gray-black: #2d2f33;
  }
  html{
    background: var(--black);
    padding: 0 5%;
    &::-webkit-scrollbar-track {
      background-color: var(--green);
    }
    &::-webkit-scrollbar {
      width: 6px;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--shape);
      border-radius: 50px;
    }
  }

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
  }
  section{
    margin-bottom: 200px;
  }
  
  button{
    cursor: pointer;
  }

  h1,h2{
    color: var(--txt-1);
  }

  h2{
    font-weight: 500;
  }

  ul{
    list-style: none;
  }

  a{
    list-style: none;
    font-style: normal;
    color: var(--txt-1);
    &:visited{
      color: var(--txt-1);
    }
  }
  .wrapper{
    max-width: 1280px;
    width: 100%;
    margin: auto;
    position: relative;
    @media(max-width: 1220px){
      width: 100%;
    }
  }
`