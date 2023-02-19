import { createApolloClient } from 'graphql/client';
import { SaveUserDocument, SaveUserMutation, SaveUserMutationVariables } from 'graphql/generated';
import { firebaseAuth } from 'lib/firebase';
import { User } from 'states/atoms/user';

export const saveUser = async (user: User) => {
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
    return data;
  } catch (error) {
    console.log(error);
  }
};