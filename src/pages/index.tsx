import type { GetStaticProps } from 'next';
import { githubApi } from '../services/apis/github';
import { HomeProps } from '../types/interfaces';

const Home = ({ userData }: HomeProps) => {
  return <h1>{userData.name}</h1>;
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
