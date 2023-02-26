import { UserCredential } from 'firebase/auth';

import { createApolloClient } from 'graphql/client';
import { SaveUserDocument, SaveUserMutation, SaveUserMutationVariables } from 'graphql/generated';
import { firebaseAuth } from 'lib/firebase';

export const saveUser = async (user: UserCredential['user']) => {
  const idToken = await firebaseAuth.currentUser?.getIdToken();
  const client = createApolloClient(idToken);

  try {
    const { data } = await client.mutate<SaveUserMutation, SaveUserMutationVariables>({
      mutation: SaveUserDocument,
      variables: {
        user: {
          name: `${user.displayName}`,
          email: `${user.email}`,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          photoUrl: user.photoURL,
          uid: user.uid,
        },
      },
    });
    return data ? data.saveUser : null;
  } catch (error) {
    console.log(error);
  }
};