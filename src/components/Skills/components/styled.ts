import styled, { css } from 'styled-components';

export const SkillsScrollContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: start;
  height: auto;
  position: relative;
  @media(max-width: 780px) {
    display: none;
  }
  > nav{
    background-color: transparent;
    list-style: none;
    padding: 0;
    width: 260px;
    padding-top: 10px;

  }
`

export const ListLinks = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  >div{
    margin-right: 8px;
    min-width: 8px;
    min-height: 8px;
    background-color: var(--shape);
    border-radius: 50px;
  }
  a{
    position: relative;
    color: var(--txt-1);
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
  }
  
  & + li{
    a::before{
      content: "";
      position: absolute;
      bottom: 26px;
      top: -19px;
      height: auto;
      min-height: 22px;
      width: 1px;
      left: -13px;
      background-color: var(--txt-1);
    }
  }

  &.active{
    >div{
      background-color: var(--green);
    }
    
    a{
      font-weight: 600;
      color: var(--green);
    }
  }

  &.active + li.active{
    a::before{
      background-color: var(--green);
    }
  }
`
export const ContentTexts = styled.div`
  margin-left: 20px;
  border-radius: 16px;
  height: 300px;
  padding: 10px 0px 10px 20px;
  background: var(--gray-black);
  width: 100%;
  > div{
    overflow-y: scroll;
    height: 100%;
    padding-right: 10px;
    div{
      margin-bottom: 30px;
      h2{
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
        color:var(--txt-1); 
        margin: 16px auto;
      }

      span, p, li{
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: var(--txt-3); 
        margin-bottom: 7px;
        padding-left: 15px;
        max-width: 80%;

      }

      h3{
        font-weight: 600;
        font-size: 15px;
        line-height: 20px;
        margin: 16px 0;
        padding-left: 10px;
        color:  var(--green);

      }

      img{
        width: 80%;
        margin: auto;
        display: block;
        max-width: 630px;
      }

      ul{
        padding-left: 1.2rem;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }
      &::-webkit-scrollbar {
        width: 4px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background-color:var(--green);
        height: 40px;
        border-radius: 50px;
      }
      a{
        color: var(--blue-light);
        text-decoration: underline;
        &:visited{
          color: var(--blue-light);
        }
      }
    }

  }

`

export const SkillsScrollContainerMobile = styled.div`
  display: none;
  width: 100%;
  flex-direction: column;
  background: var(--gray-black);
  border-radius: 8px;
  margin-top: 30px;
  @media(max-width: 780px) {
    display: flex;
  }
`

interface SkillsScrollContainerMobileProps {
  toggleMobileOpen: boolean;
}

export const Toggle = styled.div<SkillsScrollContainerMobileProps>`
  height: 48px;
  overflow-y: hidden;
  padding:0 16px;
  border-radius:8px ;
  ul{
    padding-left: 0.5rem;
  }

  button{
    display: flex;
    border:0;
    background: transparent;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    width: 100%;
    margin-right: 0;
    text-align: start;
    h2{
      padding-top:6px;
      font-size: 14px;
      font-weight: bold;
      color:var(--green);
      flex: 1;
      ${({ toggleMobileOpen }: SkillsScrollContainerMobileProps) => (toggleMobileOpen
        ? css`
                color:var(--txt-1); 
                `
        : null)
      }
    }
    svg{
      ${({ toggleMobileOpen }: SkillsScrollContainerMobileProps) => (toggleMobileOpen
        ? css`
                color:var(--green); 
                transform: rotate(180deg);
                `
        : css`color:var(--txt-1); `)
      }
    }
  }
  

  span, p{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color:var(--txt-3); 
    padding-left: 0.3rem;
    font-style: italic;
  }

  h3{
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color:var(--green);
    margin: 16px 0;
  }

  img{
    width: 100%;
    margin: auto;
    display: block;
  }

  a{
    text-decoration: underline;
    color: var(--blue-light);
    &:visited{
      color: var(--blue-light);
    }
  }

  ${({ toggleMobileOpen }: SkillsScrollContainerMobileProps) => (toggleMobileOpen
    ? css`
      background: var(--gray-black);
      height: auto;
      overflow-y: visible;
      padding-bottom: 15px;
      border: 1px solid var(--gray);
    `
    : null)
  }
`
