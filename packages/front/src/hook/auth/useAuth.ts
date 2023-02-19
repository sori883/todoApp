import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useSetRecoilState } from 'recoil';

import { saveUser } from 'domain/auth/saveUser';
import { firebaseAuth } from 'lib/firebase';
import { currentUserState } from 'states/atoms/user';

export const useAuth = () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(firebaseAuth, provider);
    // ユーザ情報をセット
    setCurrentUser(res.user);
    // ユーザを作成
    saveUser(res.user);
  };
  
  const logout = () => {
    setCurrentUser(null);
    return signOut(firebaseAuth);
  };

  return {
    googleLogin,
    logout
  };
};
