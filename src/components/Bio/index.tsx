import {useState, useEffect} from 'react';
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
            Hello, I'm Ederson Davi!
          </p>
          <Skkils>
            <p>{bioSubTitle}</p>
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
