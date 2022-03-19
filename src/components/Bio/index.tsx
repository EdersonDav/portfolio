import {useState, useEffect} from 'react';
import { User } from '../../types/interfaces';
import { Container, BioText, ImagesBio, Skkils } from './style';

interface BioProps {
  informations: User;
}

export const Bio = ({ informations }: BioProps) => {
  const [skills, setSkills] = useState<string[]>([]);
  const [bioTitle, setBioTitle] = useState('');
  const [bioSubTitle, setBioSubTitle] = useState('');

  useEffect(()=>{
    const bioGit = informations.bio;

    setBioTitle(bioGit.split('.')[0])
    setBioSubTitle(bioGit.split('.')[1].split(':')[0])
    const skillsText = bioGit.split(':')[1].split(',')
    setSkills(skillsText)
    
  }, []);

  return (
    <Container>
      <BioText>
        <div>{bioTitle}</div>
        <div>
          <p>
            Hello, I'm Ederson Davi!
          </p>
          <Skkils>
            <p>{bioSubTitle}</p>
            <ul>
              {skills?.length ? (
                <>
                  {skills.map(sk =>(
                    <li key={sk}>- {' '} {sk.trim()}</li>
                  ))}
                </>
              ): null}
            </ul>
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
