import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import { fetchCurrentUser } from 'domain/auth/fetchCurrentUser';
import { currentUserState } from 'states/atoms/user';

export const AppUserInit =  () => {
  const setCurrentUser = useSetRecoilState(currentUserState);

  useEffect(() => {
    (async function () {
      try {
        const currentUser = await fetchCurrentUser();
        setCurrentUser(currentUser);
      } catch {
        // 未ログイン（未ログイン時のリダイレクト処理などをここに書いても良いかも）
        setCurrentUser(null);
      }
    })();
  });
};