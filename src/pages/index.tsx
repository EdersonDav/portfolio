import type { GetStaticProps } from 'next';
import { githubApi } from '../services/apis/github';
import { HomeProps } from '../types/interfaces';

import { Bio } from '../components/Bio';

const Home = ({ userData }: HomeProps) => {
  return <Bio informations={userData} />;
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
