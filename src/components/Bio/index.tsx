import { useState, useEffect } from 'react';
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs';
import moment from 'moment';

import { TechIcons } from './components/TechIcons';
import { User } from '../../types/interfaces';
import { 
  Container, 
  BioText, 
  ImagesBio, 
  Skills,
  // DownloadCV,
  ButtonInfo
} from './style';

interface BioProps {
  informations: User;
}

export const Bio = ({ informations }: BioProps) => {
  const [bioSubTitle, setBioSubTitle] = useState('');

  useEffect(()=>{
    const bioGit = informations.bio;
    setBioSubTitle(bioGit)
  }, []);

  return (
    <Container id="home">
      <BioText>
        <div>
          <p>
            Olá, sou Ederson Silva
          </p>
          <h2 className='skill' >Desenvolvedor <span> Full-Stack Web </span></h2>
          <Skills>
            <p>{bioSubTitle}, desenvolvendo API's e fazendo integrações em outros sistemas e construindo páginas responsivas seguindo designes desenhados no Figma. Gosto de me desenvolver diariamente e aprender formas novas de pensar em soluções.</p>
          </Skills>
        </div>
        <ButtonInfo>
          <div>
            {moment().diff(moment('2020-03', 'YYYY-MM'), 'years')}
            <p>
              anos
              <span>de experiência </span>
            </p> 
          </div>
          <a href="assets/EdersonSilva.pdf" download>
            <BsFillFileEarmarkArrowDownFill />
            <p className='cv'>
              Resume
            </p>
          </a>
        </ButtonInfo>
        
      </BioText>
      <ImagesBio>
        <TechIcons />
        <img
          className="userImage"
          src={informations.avatar_url}
          alt={informations.name}
        />
      </ImagesBio>
      
    </Container>
  );
};
