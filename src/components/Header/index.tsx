import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';
import { CgMail, CgClose } from 'react-icons/cg';
import { BsCheckLg } from 'react-icons/bs';

import {
  Container,
  DivName,
  DivNav,
  LiNav,
  DivSocial,
  CopyEmail,
} from './styled';

interface HeaderProps {
  isOpen: boolean;
  toggleMenuMobile: () => void;
}

export const Header = ({ isOpen, toggleMenuMobile }: HeaderProps) => {
  const [navSelected, setNavSelected] = useState('home');
  const [isCopy, setIsCopy] = useState(false);
  const navMenu = [
    {
      title: 'Home',
      key: 'home',
      link:'#home'
    },
    {
      title: 'Tecnologias',
      key: 'tech',
      link:'#techs'
    },
    {
      title: 'Projetos',
      key: 'works',
      link:'#works'
    },
    {
      title: 'Contato',
      key: 'contact',
      link:'#contact'
    }
  ]

  useEffect(() => {
    if (isCopy) {
      navigator.clipboard.writeText('silva.edersonqueiroz@gmail.com');
      setTimeout(() => {
        setIsCopy(false);
      }, 3000);
    }
  }, [isCopy]);
  return (
    <Container isOpen={isOpen}>
      <button type="button" onClick={toggleMenuMobile}>
        <CgClose size={30} />
      </button>
      <DivName>
          Ederson Silva
      </DivName>
      <DivNav>
        <ul>
          {navMenu.map(nav =>(
            <LiNav key={nav.key} selected={navSelected === nav.key}>
              <a href={nav.link}  onClick={() => setNavSelected(nav.key)}>
                {nav.title}
              </a>
            </LiNav>
          ))}
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
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </li>
          <li>
            <button type="button" onClick={() => setIsCopy(true)}>
              <CgMail size={20} />
              Email
            </button>
          </li>
        </ul>
      </DivSocial>
      <CopyEmail isCopy={isCopy}>
        <div>
          <p>silva.edersonqueiroz@gmail.com</p>
          <span>
            Copiado <BsCheckLg />
          </span>
        </div>
      </CopyEmail>
    </Container>
  );
};
