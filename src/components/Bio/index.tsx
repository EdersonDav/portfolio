import { useState, useEffect } from 'react';
import { BsFillFileEarmarkArrowDownFill } from 'react-icons/bs'
import moment from 'moment';

import { User } from '../../types/interfaces';
import { 
  Container, 
  BioText, 
  ImagesBio, 
  Skkils,
  DownloadCV,
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
    <Container>
      <BioText>
        <div>
          <p>
            Olá, sou Ederson Silva
          </p>
          <p className='skill' >Desenvolvedor <span> Full-Stack Web </span>
          </p>
          <Skkils>
            <p>{bioSubTitle}, desenvolvendo API's Rest e fazendo integrações em outros sistemas e construindo páginas responsivas seguindo designes desenhados no Figma. Gosto de me desenvolver diariamente e aprender formas novas de pensar em soluções.</p>
          </Skkils>
        </div>
        <ButtonInfo>
          <div>
            2 
            <p>
              anos
              <span>de experiência </span>
            </p> 
          </div>
          <DownloadCV className="cv" href="assets/EdersonSilva.pdf" download>
            Resume <BsFillFileEarmarkArrowDownFill />
          </DownloadCV>
        </ButtonInfo>
        
      </BioText>
      <ImagesBio>
        <img
          className="userImage"
          src={informations.avatar_url}
          alt={informations.name}
        />
      </ImagesBio>
      
    </Container>
  );
};
