import { CgMenuGridO } from 'react-icons/cg';
import { Container } from './styled';

interface HeaderProps {
  isOpen: boolean;
  toogleMenuMobile: () => void;
}
export const OpenMenuButton = ({ isOpen, toogleMenuMobile }: HeaderProps) => {
  return (
    <Container
      className="openMenuMobile"
      type="button"
      onClick={toogleMenuMobile}
      isOpen={isOpen}
    >
      <CgMenuGridO size={30} />
    </Container>
  );
};
