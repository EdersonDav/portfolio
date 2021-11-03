export interface User {
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
  public_repos: number;
}

export interface HomeProps {
  userData: User;
}