import { useRef, useState, useEffect, Fragment } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import {
  SkillsScrollContainer,
  ContentTexts,
  ListLinks,
  SkillsScrollContainerMobile,
  Toggle,
} from './styled';
import {skillsData} from './skillsData'



export const SkillsScroll = (): JSX.Element => {
  const [width, setWidth] = useState(600);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const divTextsPaddingTop = 10;

  // Ref da div que contem o texto completo
  const contentRef = useRef<HTMLDivElement>(null);

  // Ref da div que contem cada texto referente ao seu titulo
  const textRef = useRef<HTMLDivElement>(null);

  const [toggleMobileOpen, setToggleMobileOpen] = useState(0);

  // state que serve para verificar em qual div
  // a "textRef" tem que ser aplica, inicialmente no texto 1
  const [numberRef, setNumberRef] = useState(1);

  // state que serve para verificar qual texto está na tela
  // ou que ja foi 'scrolado' para cima, inicialmente apenas o texto 1
  const [countDivsScroll, setCountDivsScroll] = useState(1);

  // função chamada no onscroll
  const handleScroll = (): void => {
    if (contentRef.current) {
      // scrollTop é a posição atual do scroll da div que contem todos os textos
      const scrollTop = contentRef.current?.scrollTop;

      // offsetHeight é o tamanho da div com que é mostrada na tela
      const { offsetHeight } = contentRef.current;

      // scrollHeight é o tamanho total da div com todos os texto sem estar com scroll
      const { scrollHeight } = contentRef.current;

      // fullScrollSize é o tamanho limit da div se ela
      // chegar no final do scroll ela vai ter esse valor no scrollTop
      const fullScrollSize = scrollHeight - offsetHeight;

      if (scrollTop && fullScrollSize) {
        // Pegando todos os elementos filhos da div de
        // textos, no caso é cada div com seus textos e percorrendo elas
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        contentRef.current.childNodes.forEach((e: any) => {
          // e.offsetTop é a posição do elemento filho que a
          // div com apenas um texto no elemento pai que é a div de textos
          // verificndo se o scroll do elemento pai já utrapasou o elemento filho /n
          // se utrapassou ou é igual, quer dizer que,
          // ou o elemento filho está em tela, ou ele já foi "scollado"
          // || se o scroll da div já chegou no final
          if (e.offsetTop - divTextsPaddingTop <= scrollTop || scrollTop >= fullScrollSize) {
            // Como cada texto tem um numero sequencial no seu id,
            // é feito p split pegando esse numero e setando no state
            setCountDivsScroll(Number(e.id.split('-')[1]));
          }
        });
      }
    }
  };

  // função que faz o scroll da div de textos
  const handleClickAncor = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ): Promise<void> => {
    // e.preventDefault foi necessário para tirar o efeito do "a"
    // que estava aplicando o scroll na tela toda e adicionando # na url
    e.preventDefault();

    // pegando o numero do id do objeto de textos referente
    // a o titulo que foi clicado, que está no href
    const id = e.currentTarget.hash.split('-')[1];

    // setando o state que vai adicionar a "textRef" no texto referente ao titulo que foi clicado
    // foi necessario utilizar o "await" para esperar finalizar o setSate antes de aplicar o scroll
    await setNumberRef(Number(id));

    // o scroll está sendo aplicado somento na div de textos
    // e não na tela toda, por isso é utilizado
    // "contentRef.current.scrol" ao invés de "window.scroll"
    if (contentRef.current) {
      contentRef.current.scroll({
        top: textRef.current?.offsetTop
          ? textRef.current?.offsetTop - divTextsPaddingTop
          : textRef.current?.offsetTop,

        // behavior: "smooth", serve para dar o efeito de scroll sem ele é feito um "teletransport"
        behavior: 'smooth',
      });
    }
  };

  // Toggle no mobile
  const handleToggle = (id: string): void => {
    const number = Number(id.split('-')[1]);
    setToggleMobileOpen(toggleMobileOpen === number ? 0 : number);
  };

  return (
    <>
      <SkillsScrollContainer>
        <nav className="col-3">
          {skillsData.map((item) => (
            // se a countDivsScroll for maior ou igual ao numero do id,
            // quer dizer que o texto desse titulo já foi 'scrollado' ou está em tela
            <ListLinks
              className={countDivsScroll >= Number(item.id.split('-')[1]) ? 'active' : ''}
              key={item.id}
            >
              <div />
              <a onClick={async (e) => await handleClickAncor(e)} href={`#${item.id}`}>
                {item.title}
              </a>
            </ListLinks>
          ))}
        </nav>
        <ContentTexts>
          <div onScroll={handleScroll} ref={contentRef}>
            {skillsData.map((item) => (
              // O ref se aplica apenas a div que foi clicada
              <div
                ref={Number(item.id.split('-')[1]) === numberRef ? textRef : null}
                id={item.id}
                key={item.id}
              >
                <h2>{item.title}</h2>
                <div>
                  {item.skills.map(skill => (
                    <Fragment key={skill.title}>
                      <h3>{skill.title}</h3>
                      <p>{skill.html}</p>
                    </Fragment>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </ContentTexts>
      </SkillsScrollContainer>
      <SkillsScrollContainerMobile>
        {skillsData.map((item) => (
          <Toggle
            id={`${item.id}-mobile`}
            key={`${item.id}-mobile`}
            toggleMobileOpen={toggleMobileOpen === Number(item.id.split('-')[1])}
          >
            <button onClick={() => handleToggle(item.id)} type="button">
              <h2>{item.title}</h2>
                <IoIosArrowDown size={20} />
            </button>
            <div>
              <ul>
                {item.skills.map(skill => (
                  <li key={skill.title}>
                    <h3>{skill.title}</h3>
                    <p>{skill.html}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Toggle>
        ))}
      </SkillsScrollContainerMobile>
    </>
  );
};
