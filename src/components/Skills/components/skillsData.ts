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
        html: `Utilizo NodeJs normalmente nas API's que preciso desenvolver, pois meus conhecimentos com Javascript me ajuda no desenvolvimento das mesmas.`
      }, 
      {
        title:'Express',
        html: `Juntamente com NodeJs, utilizo o express em todas API's que desenvolvo com Javascript`
      },
      {
        title:'Swagger',
        html: `Para documentar as API's que desenvolvo utilizo o Swagger por conta da sua facilidade no entendimento das rotas`
      }
    ]
  },
  {
    title: "Front-End",
    skills: [
      {
        title:'ReactJs',
        html: `Comecei a utilizar o ReactJs no ano de 2020, migrando componentes de class components para function components. Assim aprendendo melhor os funcionamentos de Hooks do React`
      },
      {
        title:'NextJs',
        html: `Comecei a utilizar o NextJs no ano de 2021 e hoje é a minha principal escolha no desenvolvimento de projetos front-ends`
      },
      {
        title:'Styled-Components',
        html: `Como minha principal ferramente de estilização, tento utilizar o styled-components na maioria dos projetos, trazendo facilidade na comunicação entre Javascript e CSS`
      },
      {
        title:'SASS',
        html: `Como em alguns projetos o uso de styled-components não é muito rentavel pelo fato da necessidade do Javascript, também desenvolvi minhas abilidades com SASS trazendo um laque maior de opções`
      },
      {
        title:'Redux-Toolkit',
        html: `Para melhor gerenciamento de states das aplicações adotei redux-toolkit como minha principal ferramenta de gerenciamento de stados no ReactJs e NextJS`
      }
    ]
  },
  {
    title: "Banco de Dados",
    skills: [
      {
        title:'PostgreSQL',
        html: `Na maioria das aplicações que atuei profissionalmente, sempre foi utilizado banco relacionais como PostgreSQL, MySQL, SQLServer. Mesmo utilizando apenas comandos mais básicos e axiolio de ORM's, adquiri mais familiaridade com PostgreSQL`
      }
      ,{
        title:'MongoDB',
        html: `Nos meus projetos pessoais gosto de utlizar MongoDB, por conta da boa integração com Javascript e a facilidade de lidar com os dados em formato de objeto`
      },
      {
        title:'Redis',
        html: `Sempre que necessito criar um cache na aplicação para trazer mais velocidade de dados para o usuario, opto pela utilização do Redis, por ser uma ferramenta fácil de utilizar e que entrega performance para a as aplicações`
      }
    ]
  }
].map((skill, index) => ({...skill, id: `skill-${index+1}` }))