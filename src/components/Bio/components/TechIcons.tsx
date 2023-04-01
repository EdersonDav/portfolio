import { SiTypescript, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';

import { Container, IconContainer } from './style';

export const TechIcons = ():JSX.Element =>{

  return(
    <Container>
      <IconContainer color='#2D79C7'>
        <SiTypescript color='#2D79C7'/>
      </IconContainer>

      <IconContainer color='#aaa'>
        <SiNextdotjs/>
      </IconContainer>

      <IconContainer color='#2D79C7'>
        <SiPostgresql color='#2F6792'/>
      </IconContainer>

      <IconContainer color='#5E955B'>
        <IoLogoNodejs color='#5E955B'/>
      </IconContainer>

      <IconContainer color='#2D79C7'>
        <FaReact color='#54C1D8'/>
      </IconContainer>
    </Container>
  )

}