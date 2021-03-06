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
  const [navSelected, setNavSelected] = useState('');
  const [isCopy, setIsCopy] = useState(false);

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
