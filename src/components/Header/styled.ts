import styled from "styled-components";

interface MenuProps {
  isOpen: boolean;
}
export const Container = styled.div<MenuProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: transparent;
  position: sticky;
  >button{
    display: none;
  }
  >div{
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  @media(max-width: 1205px){
    visibility: ${({ isOpen }: MenuProps) => !isOpen ? 'hidden' : 'visible'};
    width: ${({ isOpen }: MenuProps) => !isOpen ? 0 : 250}px;
    transition: all  .6s;
    overflow-x: hidden;
    z-index: 9;
    display: flex;
    top: 0;
    bottom:0;
    height: 100vh;
    position: absolute;
    flex-direction: column;
    right:0;
    justify-content: flex-start;
    border-left: 1px solid var(--green);
    border-radius: 16px 0 0 16px;
    >button{
      background-color: var(--black);
      border:0;
      display: flex;
      position: absolute;
      top: 20px;
      right: 10px;
      color: var(--green);
    }
    >div{
      opacity: ${({ isOpen }: MenuProps) => !isOpen ? 0 : 1};
      flex-direction: column;
      height: auto;
      align-items: center;
      width: 100%;
      transition: all .6s;
      padding: 0 20px;
    }
  }
`

export const DivName = styled.div`
  h1{
    letter-spacing: 1px;
    font-size: 38px;
    color: var(--white);
    display: flex;
    align-items: flex-end;
    font-weight: 500;
    span{
      font-size: 38px;
      color: var(--gray);
      font-weight: normal;
    }
  }
  @media(max-width: 1205px){
    min-width: auto;
    justify-content: flex-start;
    margin: 80px 0 40px;
    
    h1{
      width: 100%;
      min-width: 150px;
      display: flex;
      a{
       width: 100%;
      }
      align-items: flex-start;
      font-size: 22px;
      span{
        font-size: 22px;
      }
    }
  }

`


export const DivNav = styled.div`
  >ul{
    display: flex;
    align-items: flex-end;
    @media(max-width: 1205px){
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 40px;
    }
  }
`

interface NavProps {
  selected: boolean;
}

export const LiNav = styled.li<NavProps>`
  & + li{
    margin-left: 50px;

  }

  button{
    color: var(--white);
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 2px;
    border:0;
    background: transparent;
    span{
      display: inline;
      color: ${({ selected }: NavProps) => selected ? 'var(--purple)' : 'transparent'};
      transition: all 1s;
      font-weight: 800;
    }
    &:hover{
      span{
        color: var(--purple);
      }
    }
  }
  
  @media(max-width: 1205px){
    width: 100%;
    min-width: 130px;
    font-size: 16px;
    &, & + li{
      margin: 30px 0px;
    }
    span{
      font-size: 16px;
    }
  }
`

export const DivSocial = styled.div`
  >ul{
    display: flex;
    align-items: flex-end;
    @media(max-width: 1205px){
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      margin-bottom: 40px;
    }
    li{
      button{
        background: transparent;
        border: 0;
        color: var(--white);
        font-size: 16px;
        letter-spacing: 2px;
      }
      a, button{
        display: flex;
        align-items: center;
        svg{
          margin-right: 5px;
        }
      }
      
      & + li{
        margin-left: 40px;
      }
      color: var(--white);
      font-size: 16px;
      letter-spacing: 2px;
      &:hover{
        a, button{
          color: var(--purple);
        }
      }
      @media(max-width: 1205px){
        &, & + li{
          margin: 30px 0px;
        }
        span{
          display: none;
        }
        &:hover{
          a, button{
            color: var(--white);
          }
        }
      }
    }
  }
`

interface CopyEmailProps {
  isCopy: boolean
}

export const CopyEmail = styled.div<CopyEmailProps>`
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  z-index: 20;
  visibility: ${({ isCopy }: CopyEmailProps) => !isCopy ? 'hidden' : 'visible'};
  bottom: ${({ isCopy }: CopyEmailProps) => !isCopy ? 0 : 20}px;
  height: ${({ isCopy }: CopyEmailProps) => !isCopy ? '0px' : 'auto'};
  transition: all .3s;
  div{
    background-color: #000;
    display: flex;
    padding: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    p{
      font-size: 25px;
      color: var(--white);
      margin-right: 20px;
    }
    span{
      display: flex;
      align-items: center;
      background: var(--green);
      padding: 15px;
      font-size: 20px;
      font-weight: 500;
      svg{
        margin-left: 10px;
      }
      border-radius: 20px;
    }
    @media(max-width: 1205px){
      padding: 10px;
      p{
        font-size: 16px;
        margin-right: 10px;
      }
      span{
        padding: 10px;
        font-size: 12px;
        svg{
          margin-left: 5px;
        }
        border-radius: 20px;
      }
    }
  }
`