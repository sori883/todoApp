import { getIdToken } from 'domain/auth/getIdToken';
import { createApolloClient } from 'graphql/client';
import { FindCurrentUserDocument, FindCurrentUserQuery, FindCurrentUserQueryVariables } from 'graphql/generated';

export const FindCurrentUser = async () => {
  const idToken = await getIdToken();
  const client = createApolloClient(idToken);

  try {
    const { data } = await client.query<FindCurrentUserQuery, FindCurrentUserQueryVariables>({
      query: FindCurrentUserDocument,
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};