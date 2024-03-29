import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media(max-width: 1080px){
    flex-direction: column-reverse;
  }
`

export const BioText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  @media(max-width: 1080px){
    padding:0;
  }
  p{
    color: var(--txt-1);
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;
    
    @media(max-width: 760px){
      font-size: 16px;
      line-height: 18px;
    }
  }
  h2{
    color: var(--txt-1);
    line-height: 30px;
    font-size: 28px;
    margin-bottom: 30px;
    font-style: italic;
    overflow: hidden ;
    >span{
      color: var(--green);
      font-style: italic;
      position: relative ;
      &::after{
        content: '}';
        
      }
      &::before{
        content: '{';
      }

    }
    @media(max-width: 760px){
      line-height: 18px;
      font-size: 20px;
      margin-bottom: 18px;
    }

  }
`

export const Skills = styled.div`
  p{
    color: var(--txt-1);
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
    @media(max-width: 760px){
      font-size: 16px;
      line-height: 20px;
    }
  }
`

export const ImagesBio = styled.div`
  position: relative;
  .userImage{
    max-width: 600px;
    border-radius: 50%;
    border: solid 2px var(--green);
    @media(max-width: 1080px){
      width: 70%;
      margin-bottom: 50px;
    }
  }
`

export const ButtonInfo = styled.div`
  margin-top: 50px ;
  display: flex ;
  align-items: center;
  height:50px ;

  >div, >a{
    color: var(--txt-1);
    height: 100%;
    margin:0 ;
    margin-right: 20px;
    display:flex;
    align-items: end;
    font-size: 40px;
    
    >svg{
      font-size: 37px;
      padding-bottom: 8px;
    }
    >p{
      font-weight: 700;
      color: var(--gray);
      display:flex;
      flex-direction: column;
      font-size: 10px;
      text-transform: uppercase;
      margin: 0;
      margin-left: 10px;
      padding-bottom: 7px;
      &.cv{
        margin-left: 5px;
        padding-bottom: 0px;
        font-size: 14px;
      }
      >span{
        line-height:10px ;
      }
    }
  }

  a:hover{
    border-bottom: 1px solid var(--green) ;
  }

  @media(max-width: 1080px){
    >div, >a{
      font-size: 30px;
      >svg{
        font-size: 30px;
        padding-bottom: 5px;
      }
      >p{
        padding-bottom: 5px;
        &.cv{
          padding-bottom: 1px;
          font-size: 13px;
        }
        >span{
          line-height:10px ;
        }
      }
    }
  }
`
