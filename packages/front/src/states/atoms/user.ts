import {
  UserCredential,
} from 'firebase/auth';
import { atom } from 'recoil';

import { AtomKeys } from 'states/recoilKeys';

// undefined : まだログイン確認が完了していない状態とする
// null : ログイン確認をした結果、ログインしていなかった状態とする
export const currentUserState  = atom<undefined | null | UserCredential['user']>({
  key: AtomKeys.CURRENT_USER_STATE,
  default: undefined,
});