import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 5;
  background: transparent;
  width:100%;
  height:100%;
`

const floating = keyframes`
  0% { transform: translate(0,  0px); }
  50%  { transform: translate(0, 5px); }
  100%   { transform: translate(0, -0px); }   
`

export const IconContainer = styled.div<{color: string}>`
  width: 22%;
  height: 22%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: var(--shape);
  position: absolute;
  box-shadow: -1px 10px 30px -5px ${({color})=> color ? color : 'var(--shape)'};
  animation: ${floating} 3s ease-in-out infinite;
  >svg{
    font-size: 50px;
  }
  &:nth-child(1){
    top: 4%;
    right: 2%;
    animation-delay: 2s;
  }
  &:nth-child(2){
    bottom: -10%;
    right: 10%;
    width: 15%;
    height: 15%;
    animation-delay: 4s;
    svg{
      font-size: 40px;
    }
  }

  &:nth-child(3){
    bottom: 40%;
    right: 10%;
    width: 12%;
    animation-delay: 1s;
    height: 12%;
    svg{
      font-size: 30px;
    }
  }

  &:nth-child(4){
    bottom: 10%;
    left: -5%;
    animation-delay: 7s;
  }

  &:nth-child(5){
    top: 20%;
    left: 8%;
    width: 15%;
    height: 15%;
  }

  @media(max-width: 1080px){
    width: 17%;
    height: 20%;
    svg{
      font-size: 40px;
    }

    &:nth-child(1){
      right: -20%;
    }
    &:nth-child(2){
      width: 12%;
      height: 14%;
      bottom: 32%;
      right: -47%;
      svg {
        font-size: 30px;
      }
    }
    &:nth-child(4){
      left: 52%;
    }
    
    &:nth-child(3){
      width: 9%;
      height: 11%;
      svg{
        font-size: 22px;
      }
    }

    &:nth-child(5){
      width: 12%;
      left: 63%;
    }
  }

  @media(max-width: 760px){
    width: 12%;
    height: 14%;
    svg{
      font-size: 28px;
    }

    &:nth-child(1){
      top: -3%;
      left: 2%;
    }
    &:nth-child(2){
      width: 10%;
      height: 11%;
      bottom: 59%;
      left: 1%;
      svg {
        font-size: 28px;
      }
    }
    &:nth-child(4){
      bottom: 40%;
    }
    
    &:nth-child(3){
      height: 10%;
      bottom: 27%;
      left: 6%;
    }

    &:nth-child(5){
      width: 10%;
      height: 11%;
    }
  }

  @media(max-width: 450px){
    width: 12%;
    height: 12%;
    svg{
      font-size: 22px;
    }
    &:nth-child(2){
      height: 10%;
      svg {
        font-size: 20px;
      }
    }
    
    &:nth-child(3){
      width: 10%;
      height: 10%;
      bottom: 35%;
      svg {
        font-size: 20px;
      }
    }

    &:nth-child(5){
      height: 10%;
    }
  }
`