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
  toogleMenuMobile: () => void;
}

export const Header = ({ isOpen, toogleMenuMobile }: HeaderProps) => {
  const [navSelected, setNavSelected] = useState('home');
  const [isCopy, setIsCopy] = useState(false);
  const navMenu = [
    {
      title: 'Home',
      key: 'home'
    },
    {
      title: 'Tecnologias',
      key: 'tech'
    },
    {
      title: 'Projetos',
      key: 'works'
    },
    {
      title: 'Contato',
      key: 'contact'
    }
  ]

  useEffect(() => {
    if (isCopy) {
      navigator.clipboard.writeText('silva.edersonqueiroz@gmail.com');
      setTimeout(() => {
        setIsCopy(false);
      }, 2000);
    }
  }, [isCopy]);
  return (
    <>
      <Container isOpen={isOpen}>
        <button type="button" onClick={toogleMenuMobile}>
          <CgClose size={30} />
        </button>
        <DivName>
            Ederson Silva
        </DivName>
        <DivNav>
          <ul>
            {navMenu.map(nav =>(
              <LiNav key={nav.key} selected={navSelected === nav.key}>
                <button onClick={() => setNavSelected(nav.key)}>
                  <span>&lt;</span> {nav.title}<span> /&gt;</span>
                </button>
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
      </Container>
      <CopyEmail isCopy={isCopy}>
        <div>
          <p>silva.edersonqueiroz@gmail.com</p>
          <span>
            Copiado <BsCheckLg />
          </span>
        </div>
      </CopyEmail>
    </>
  );
};
