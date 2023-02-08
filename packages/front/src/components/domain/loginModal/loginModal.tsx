import { useAuth } from "hook/auth";

export const LoginModal = () => {
  const { googleLogin, logout } = useAuth();

  return (
    <div>
      <button onClick={googleLogin}>googleログイン</button>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};