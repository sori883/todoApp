import { createApolloClient } from 'graphql/client';
import { FindCurrentUserDocument, FindCurrentUserQuery, FindCurrentUserQueryVariables } from 'graphql/generated';
import { firebaseAuth } from 'lib/firebase';

export const fetchCurrentUser = async () => {

  const firebaseUser = firebaseAuth.currentUser;

  // firebaseのcurrentUserが存在していない場合はログイン失敗とする
  if (!firebaseUser) return null;

  const idToken = await firebaseAuth.currentUser?.getIdToken();
  const client = createApolloClient(idToken);

  // DBからCurrentUserを取得する
  try {
    const { data } = await client.query<FindCurrentUserQuery, FindCurrentUserQueryVariables>({
      query: FindCurrentUserDocument,
    });
    return data ? data.findCurrentUser : null;
  } catch (error) {
    console.log(error);
  }

  return null;
};