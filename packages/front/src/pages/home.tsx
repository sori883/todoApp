import type { NextPage } from 'next';

import { useRequireLogin } from 'hook/auth/useRequireLogin';


const Home: NextPage = () => {
  useRequireLogin();

  return (
    <div>
      テストページ
    </div>
  );
};

export default Home;