import { User } from '../../types/interfaces';
import { Container, BioText, ImagesBio } from './style';

interface BioProps {
  informations: User;
}

export const Bio = ({ informations }: BioProps) => {
  return (
    <Container>
      <BioText>
        <span>Full-Stack Developer</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima
          sunt at, cumque quas, facere libero ab vero temporibus facilis
          adipisci. Suscipit, at. Ipsam ex, nobis deleniti pariatur maxime
          alias.
        </p>
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
