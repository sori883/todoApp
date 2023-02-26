import { atom } from 'recoil';

import { AtomKeys } from 'states/recoilKeys';

export type User = {
  id: number;
  name: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  uid: string;
};


// undefined : まだログイン確認が完了していない状態とする
// null : ログイン確認をした結果、ログインしていなかった状態とする
export const currentUserState  = atom<undefined | null | User>({
  key: AtomKeys.CURRENT_USER_STATE,
  default: undefined,
});