import styled, {keyframes} from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 150px;
  justify-content: space-between;
  margin: 200px auto;
`

export const BioText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
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
  }
`

export const Skkils = styled.div`
  p{
    color: var(--white);
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  ul{
    color: var(--white);
    font-size: 18px;
    line-height: 25px;
  }
`

export const ImagesBio = styled.div`
  .userImage{
    max-width: 600px;
    border-radius: 50%;
    border: solid 2px var(--green);
  }
`