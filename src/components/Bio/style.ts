import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 200px;
  justify-content: space-around;
  padding: 0 200px;
`

export const BioText = styled.div`
  display: flex;
  flex-direction: column;
  >span{
    margin-bottom: 50px;
    font-size: 24px;
    background-color: var(--purple);
    padding: 10px;
    max-width: 300px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    color: var(--white);
    border-radius: 20px;
  }
  >p{
    color: var(--white);
    font-size: 24px;
    max-width: 80%;
    line-height: 30px;
  }
`

export const ImagesBio = styled.div`
  .userImage{
    width: 600px;
    border-radius: 50%;
    border: solid 3px var(--purple);
  }
`