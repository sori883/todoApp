import { getIdToken } from 'domain/auth/getIdToken';
import { createApolloClient } from 'graphql/client';
import {
  AddAttachmentInput,
  SaveAttachmentDocument,
  SaveAttachmentMutation,
  SaveAttachmentMutationVariables
} from 'graphql/generated';

export const saveAttachment = async (attachment: AddAttachmentInput) => {
  const idToken = await getIdToken();
  const client = createApolloClient(idToken);

  try {
    const { data } = await client.mutate<SaveAttachmentMutation, SaveAttachmentMutationVariables>({
      mutation: SaveAttachmentDocument,
      variables: {
        attachment: attachment
      },
    });
    return data ? data.saveAttachment : null;
  } catch (error) {
    console.log(error);
  }
};