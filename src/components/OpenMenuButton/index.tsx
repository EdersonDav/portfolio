import { CgMenuGridO } from 'react-icons/cg';
import { Container } from './styled';

interface HeaderProps {
  isOpen: boolean;
  toggleMenuMobile: () => void;
}
export const OpenMenuButton = ({ isOpen, toggleMenuMobile }: HeaderProps) => {
  return (
    <Container
      className="openMenuMobile"
      type="button"
      onClick={toggleMenuMobile}
      isOpen={isOpen}
    >
      <CgMenuGridO size={30} />
    </Container>
  );
};
