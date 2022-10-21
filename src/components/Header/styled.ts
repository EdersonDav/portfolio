import styled from "styled-components";

interface MenuProps {
  isOpen: boolean;
}
export const Container = styled.div<MenuProps>`
  display: flex;
  align-items: flex-end;
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
  }
  @media(max-width: 1220px){
    visibility: ${({ isOpen }: MenuProps) => !isOpen ? 'hidden' : 'visible'};
    background: var(--background);
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
      background-color: var(--background);
      border:0;
      display: flex;
      position: absolute;
      top: 20px;
      right: 10px;
      color: var(--green);
    }
    >div, >h1{
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

export const DivName = styled.h1`
  letter-spacing: 1px;
  font-size: 32px;
  font-weight: 500;
  max-width: 245px ;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden ;
  @media(max-width: 1220px){
    min-width: auto;
    justify-content: flex-start;
    max-width: 245px ;
    margin: 80px 0 40px;
    text-align:center ;
    font-size: 22px;
  }

`


export const DivNav = styled.div`
  width: 700px;
  margin: 0 20px;

  >ul{
    padding-bottom: 5px;
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content:space-between ;
    
  }
  @media(max-width: 1220px){
    width: 100%;
    margin: 0;
    >ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
      justify-content:start;
    }
    
  }
`

interface NavProps {
  selected: boolean;
}

export const LiNav = styled.li<NavProps>`
  display:flex ;
  justify-content: center ;

  button{
    color: var(--txt-1);
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 2px;
    border:0;
    background: transparent;
    &::after{
      content: '/>';
    }
    &::before{
      content: '<';
    }
    &::after, &::before{
      margin: 0 5px;
      color: ${({ selected }: NavProps) => selected ? 'var(--green)' : 'transparent'};
      transition: all 1s;
      font-weight: 800;
    }
    &:hover{
      &::after, &::before{
        color: var(--green);
      }
    }
    
  }
  
  @media(max-width: 1220px){
    width: 100%;
    min-width: 130px;
    font-size: 16px;
    overflow:hidden ;
    button{
      max-width: 260px ;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden ;
      text-align:center ;
      &::after, &::before{
        font-size: 16px;
      }
    }
    &, & + li{
      margin: 30px 0px;
    }
  }
`

export const DivSocial = styled.div`
  >ul{
    padding-bottom: 5px;
    display: flex;
    align-items: flex-end;
    @media(max-width: 1220px){
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 40px;
    }
    li{
      button{
        background: transparent;
        border: 0;
        color: var(--txt-1);
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
      color: var(--txt-1);
      font-size: 16px;
      letter-spacing: 2px;
      &:hover{
        a, button{
          color: var(--green);
        }
      }
      @media(max-width: 1220px){
        &, & + li{
          margin: 30px 0px;
        }
        span{
          display: none;
        }
        &:hover{
          a, button{
            color: var(--txt-1);
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
      color: var(--txt-1);
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
    @media(max-width: 1220px){
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