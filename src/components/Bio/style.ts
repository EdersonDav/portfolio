import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 150px;
  justify-content: space-around;
  padding: 0 200px;
`

export const BioText = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 100px;
  >div:first-child{
    margin-bottom: 50px;
    font-size: 24px;
    background-color: var(--purple);
    padding: 10px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    color: var(--white);
    border-radius: 20px;
    max-width: 500px;
  }
  p{
    color: var(--white);
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 10px;
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
    width: 600px;
    border-radius: 50%;
    border: solid 3px var(--purple);
  }
`