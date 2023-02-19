import { useRecoilValue } from 'recoil';

import { currentUserState } from 'states/atoms/user';

export function useCurrentUser() {
  // グローバルステートからcurrentUserを取り出す
  const currentUser = useRecoilValue(currentUserState);
  
  // ログイン情報を取得中かどうか
  const isAuthChecking = currentUser === undefined;

  return {
    currentUser,
    isAuthChecking
  };
}