export const skillsData = [
  {
    title: "Linguagens",
    skills: [
      {
        title:'JavaScript',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3.`
      },
      {
        title:'Typescript',
        html: `Comecei a utilizar Typescript em projetos ReactJs e NodeJs em 2020 e tenho utilizado sempre que possível, pois facilita o desenvolvimento de novas funcionalidades e manutenções.`
      }
    ]
  },
  {
    title: "Back-End",
    skills: [
      {
        title:'NodeJs',
        html: `Utilizo NodeJs normalmente nas APIs que preciso desenvolver.`
      }, 
      {
        title:'Express',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }, 
      {
        title:'TypeORM',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      },
      {
        title:'Node-Cron',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }, 
      {
        title:'API-REST',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }, 
      {
        title:'Swagger',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }
    ]
  },
  {
    title: "Front-End",
    skills: [
      {
        title:'NextJs',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      },
      {
        title:'ReactJs',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      },
      {
        title:'Styled-Components',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      },
      {
        title:'SASS',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      },
      {
        title:'Redux-Toolkit',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }
    ]
  },
  {
    title: "Banco de Dados",
    skills: [
      {
        title:'PostgreSQL',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      },
      {
        title:'MySQL',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }
      ,{
        title:'MongoDB',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      },
      {
        title:'Redis',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }
    ]
  },
  {
    title: "Testes",
    skills: [
      {
        title:'Jest',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }, 
      {
        title:'Cypress',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }, 
      {
        title:'TDD',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }
    ]
  },
  {
    title: "Ferramentas e Metodologias",
    skills: [
      {
        title:'Git',
        html: `
            <p>
              Trabalho com a <strong>JavaScript</strong> desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com <strong>HTML5</strong> e <strong>CSS3</strong>
            </p>
          `
      }, 
      {
        title:'SCRUM',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }, 
      {
        title:'Amazon-S3',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }, 
      {
        title:'SOLID',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }
    ]
  },
  {
    title: "Sistemas Operacionais",
    skills: [
      {
        title:'Linux',
        html: `Trabalho com a JavaScript desde o incício da minha carreira como desenvolvedor, inicialmente utilizando em projetos de estudo juntamente com HTML5 e CSS3`
      }
    ]
  }
].map((skill, index) => ({...skill, id: `skill-${index+1}` }))