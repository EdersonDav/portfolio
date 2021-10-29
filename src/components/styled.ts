import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background-color: transparent;
  >div{
    height: 100%;
    display: flex;
    align-items: flex-end;
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

`


export const DivNav = styled.div`
  >ul{
    display: flex;
    align-items: flex-end;
  }
`

interface NavProps {
  selected: boolean;
}

export const LiNav = styled.li<NavProps>`
  & + li{
    margin-left: 80px;
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
`

export const DivSocial = styled.div`
  >ul{
    display: flex;
    align-items: flex-end;
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
    }
  }
`