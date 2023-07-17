import { SkillsScroll } from './components/SkillsScroll';
import { Container } from './styled';

export const Skills = ():JSX.Element =>{
  return(
    <Container id="techs">
      <h2>Tecnologias</h2>
      <SkillsScroll/>
    </Container>
  )
}