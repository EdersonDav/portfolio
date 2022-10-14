import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 150px;
  justify-content: space-between;
  margin: 200px auto;
  @media(max-width: 1080px){
    flex-direction: column-reverse;
    margin: 100px auto;
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
    color: var(--white);
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 20px;
    &.skill{
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
    }
    @media(max-width: 760px){
      font-size: 16px;
      line-height: 18px;
      &.skill{
        font-size: 20px;
        margin-bottom: 18px;
      }
    }
  }
`

export const Skkils = styled.div`
  p{
    color: var(--white);
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
  height:100px ;

  >div{
    color: var(--white);
    height: 100%;
    margin:0 ;
    margin-right: 20px;
    display:flex;
    align-items: end;
    font-size: 40px;
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
      >span{
        line-height:10px ;
      }
    }
  }

  @media(max-width: 760px){
    margin-top: 20px;
  }
`

export const DownloadCV = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 15px;
  border-radius: 10px;
  border: 2px solid var(--green);
  max-width: 200px ;
  color: var(--white);
  font-size: 18px;
  >svg{
    margin-left: 10px ;
  }
  @media(max-width: 760px){
    padding: 11px;
    max-width: 120px;
    margin-top: 20px;
    font-size: 14px;
  }
`

