import styled from "styled-components";

interface MenuProps {
  isOpen: boolean;
}

export const Container = styled.button`
  display: none;
  @media(max-width: 1220px){
    display: ${({ isOpen }: MenuProps) => isOpen ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border:0;
    position: absolute;
    top: 20px;
    right: 10px;
    color: var(--green);
  }
`