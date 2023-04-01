import type { GetStaticProps } from 'next';

import { githubApi } from '../services/apis/github';
import { HomeProps } from '../types/interfaces';

import { Bio } from '../components/Bio';
import { Skills } from '../components/Skills';

const Home = ({ userData }: HomeProps) => {
  return (
    <div className="wrapper">
      <Bio informations={userData} />
      <Skills />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const userData = await githubApi
    .get('/users/edersondav')
    .then(resp => resp.data);

  return {
    props: { userData },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
