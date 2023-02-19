import { User } from 'firebase/auth';

import { firebaseAuth } from 'lib/firebase';

export const fetchCurrentUser = async (): Promise<User | null> => {
  return firebaseAuth.currentUser;
};