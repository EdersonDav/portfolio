import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 5;
  background: transparent;
  width:100%;
  height:100%;
  >div{
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--white);
    >svg{
      font-size: 50px;
    }
  }
`