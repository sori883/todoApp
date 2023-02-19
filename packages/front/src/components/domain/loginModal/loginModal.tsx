import { FindCurrentUser } from 'domain/auth/findCurrentUser';
import { FindUserById } from 'domain/auth/findUserById';
import { useAuth } from 'hook/auth/useAuth';

export const LoginModal = () => {
  const { googleLogin, logout } = useAuth();

  return (
    <div>
      <button onClick={googleLogin}>googleログイン</button>
      <button onClick={logout}>ログアウト</button>

      <button onClick={() => {FindUserById(1);}}>サーチ！</button>
      <button onClick={() => {FindCurrentUser();}}>自分</button>
    </div>
  );
};