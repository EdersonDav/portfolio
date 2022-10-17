import { SiTypescript, SiNextdotjs, SiPostgresql } from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';

import { Container } from './style';

export const TechIcons = ():JSX.Element =>{

  return(
    <Container>
      <div>
        <SiTypescript/>
      </div>
      <div>
        <SiNextdotjs/>
      </div>
      <div>
        <SiPostgresql/>
      </div>
      <div>
        <IoLogoNodejs/>
      </div>
      <div>
        <FaReact/>
      </div>
    </Container>
  )

}