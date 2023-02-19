import { firebaseAuth } from 'lib/firebase';

export const getIdToken = async (): Promise<string | undefined> => {
  return await firebaseAuth.currentUser?.getIdToken();
};