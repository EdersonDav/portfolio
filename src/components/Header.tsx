import { useState } from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';

import { Container, DivName, DivNav, LiNav, DivSocial } from './styled';
export const Header = () => {
  const [navSelected, setNavSelected] = useState('');
  return (
    <Container>
      <DivName>
        <h1>
          <Link href="/">
            <a onClick={() => setNavSelected('')}>
              Ederson <span>Silva</span>
            </a>
          </Link>
        </h1>
      </DivName>
      <DivNav>
        <ul>
          <LiNav selected={navSelected === 'work'}>
            <Link href="/">
              <a onClick={() => setNavSelected('work')}>
                <span>&lt;</span> Trabalhos<span> /&gt;</span>
              </a>
            </Link>
          </LiNav>
          <LiNav selected={navSelected === 'projects'}>
            <Link href="/">
              <a onClick={() => setNavSelected('projects')}>
                <span>&lt;</span> Projetos<span> /&gt;</span>
              </a>
            </Link>
          </LiNav>
          <LiNav selected={navSelected === 'contact'}>
            <Link href="/">
              <a onClick={() => setNavSelected('contact')}>
                <span>&lt;</span> Contato<span> /&gt;</span>
              </a>
            </Link>
          </LiNav>
        </ul>
      </DivNav>
      <DivSocial>
        <ul>
          <li>
            <a href="https://github.com/EdersonDav" target="_blank">
              <AiFillGithub size={20} />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/silvaedersonqueiroz/"
              target="_blank"
            >
              <BsLinkedin size={20} />
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:silva.edersonqueiroz@gmail.com">
              <CgMail size={20} />
              Email
            </a>
          </li>
        </ul>
      </DivSocial>
    </Container>
  );
};
