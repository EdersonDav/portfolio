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
  >button{
    display: none;
  }
  >div{
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
  @media(max-width: 1205px){
    display: ${({ isOpen }: MenuProps) => isOpen ? 'flex' : 'none'};
    top: 0;
    bottom:0;
    height: 100vh;
    position: absolute;
    width: 250px;
    flex-direction: column;
    right:0;
    justify-content: flex-start;
    border-left: 1px solid var(--green);
    border-radius: 16px 0 0 16px;
    >button{
      background-color: transparent;
      border:0;
      display: flex;
      position: absolute;
      top: 20px;
      right: 10px;
      color: var(--green);
    }
    >div{
      flex-direction: column;
      height: auto;
      align-items: center;
      width: 100%;
      padding: 0 20px;
    }
  }
`

export const DivName = styled.div`
  min-width: 250px;
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
    margin: 80px 0 40px;
    h1{
      width: 100%;
      display: flex;
      align-items: center;
      font-size: 28px;
      span{
        font-size: 28px;
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

  color: var(--white);
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 2px;
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
  @media(max-width: 1205px){
    &, & + li{
      margin: 30px 0px;
    }
    span{
      display: none;
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
      a{
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
        a{
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
      }
    }
  }
`