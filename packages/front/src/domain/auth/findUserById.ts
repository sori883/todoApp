import { getIdToken } from 'domain/auth/getIdToken';
import { createApolloClient } from 'graphql/client';
import { FindUserByIdDocument, FindUserByIdQuery, FindUserByIdQueryVariables } from 'graphql/generated';

export const FindUserById = async (id : number) => {
  const idToken = await getIdToken();
  const client = createApolloClient(idToken);

  try {
    const { data } = await client.query<FindUserByIdQuery, FindUserByIdQueryVariables>({
      query: FindUserByIdDocument,
      variables: { id: id }
    });
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};