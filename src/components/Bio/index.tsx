import { useState, useEffect } from 'react';
import moment from 'moment';

import { User } from '../../types/interfaces';
import { Container, BioText, ImagesBio, Skkils } from './style';

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
        <div>Full-Stack Web</div>
        <div>
          <p>
            Olá, sou Ederson Davi!
          </p>
          <Skkils>
            <p>{bioSubTitle}, desenvolvendo API's Rest e fazendo integrações em outros sistemas e construindo páginas responsivas seguindo designes desenhados no Figma. Gosto de me desenvolver diariamente e aprender formas novas de pensar em soluções.</p>
          </Skkils>
        </div>
        
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
