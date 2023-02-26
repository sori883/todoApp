import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: number;
};

export type AddAttachmentInput = {
  name: Scalars['String'];
  path: Scalars['String'];
};

export type AddUserInput = {
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  isAnonymous: Scalars['Boolean'];
  name: Scalars['String'];
  photoUrl?: InputMaybe<Scalars['String']>;
  uid: Scalars['String'];
};

export type AttachmentModel = {
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  path: Scalars['String'];
  task?: Maybe<TaskModel>;
  updatedAt: Scalars['Date'];
  user: UserModel;
  workspace?: Maybe<WorkspaceModel>;
};

export type CommentModel = {
  body: Scalars['String'];
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  task: TaskModel;
  updatedAt: Scalars['Date'];
  user: UserModel;
};

export type Mutation = {
  deleteAttachyment?: Maybe<AttachmentModel>;
  deleteUser?: Maybe<UserModel>;
  saveAttachment?: Maybe<AttachmentModel>;
  saveUser?: Maybe<UserModel>;
  updateAttachment: AttachmentModel;
  updateUser: UserModel;
};


export type MutationDeleteAttachymentArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationSaveAttachmentArgs = {
  attachment: AddAttachmentInput;
};


export type MutationSaveUserArgs = {
  user: AddUserInput;
};


export type MutationUpdateAttachmentArgs = {
  attachment: UpdateAttachmentInput;
};


export type MutationUpdateUserArgs = {
  user: UpdateUserInput;
};

export type ProjectModel = {
  createdAt: Scalars['Date'];
  detail?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  task?: Maybe<TaskModel>;
  updatedAt: Scalars['Date'];
  user: UserModel;
  workspace: WorkspaceModel;
};

export type Query = {
  findCurrentUser: UserModel;
  findUserById?: Maybe<AttachmentModel>;
  findUserByPath?: Maybe<AttachmentModel>;
};


export type QueryFindUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryFindUserByPathArgs = {
  path: Scalars['String'];
};

export enum TagColor {
  Blue = 'blue',
  Brown = 'brown',
  Default = 'default',
  Green = 'green',
  Grey = 'grey',
  Indigo = 'indigo',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  Yellow = 'yellow'
}

export type TagModel = {
  color: TagColor;
  createdAt: Scalars['Date'];
  id: Scalars['Int'];
  name: Scalars['String'];
  tasksOnTags?: Maybe<Array<TasksOnTags>>;
  updatedAt: Scalars['Date'];
  user: UserModel;
  workspace: WorkspaceModel;
};

export type TaskModel = {
  attachments?: Maybe<Array<AttachmentModel>>;
  comments?: Maybe<Array<CommentModel>>;
  createdAt: Scalars['Date'];
  detail?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  limitAt?: Maybe<Scalars['Date']>;
  name: Scalars['String'];
  priority: TaskPriority;
  project: ProjectModel;
  startAt?: Maybe<Scalars['Date']>;
  tasksOnTags?: Maybe<Array<TasksOnTags>>;
  tasksOnUsers?: Maybe<Array<TasksOnUsers>>;
  updatedAt: Scalars['Date'];
  user: UserModel;
};

export enum TaskPriority {
  High = 'high',
  Low = 'low',
  Nomal = 'nomal'
}

export type TasksOnTags = {
  tag: TagModel;
  tagId: Scalars['Int'];
  task: TaskModel;
  taskId: Scalars['Int'];
};

export type TasksOnUsers = {
  task: TaskModel;
  taskIc: Scalars['Int'];
  user: UserModel;
  userId: Scalars['Int'];
};

export type UpdateAttachmentInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
  path: Scalars['String'];
};

export type UpdateUserInput = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type UserModel = {
  attachments: Array<AttachmentModel>;
  comments: Array<CommentModel>;
  createdAt: Scalars['Date'];
  email: Scalars['String'];
  emailVerified: Scalars['Boolean'];
  id: Scalars['Int'];
  isAnonymous: Scalars['Boolean'];
  name: Scalars['String'];
  photoUrl?: Maybe<Scalars['String']>;
  projects: Array<ProjectModel>;
  tags: Array<TagModel>;
  tasks: Array<TaskModel>;
  tasksOnUsers?: Maybe<Array<TasksOnUsers>>;
  uid: Scalars['String'];
  updatedAt: Scalars['Date'];
  usersOnWorkspaces: Array<UsersOnWorkspaces>;
};

export type UsersOnWorkspaces = {
  user: UserModel;
  userId: Scalars['Int'];
  workspace: WorkspaceModel;
  workspaceId: Scalars['Int'];
};

export type WorkspaceModel = {
  Id: Scalars['Int'];
  createdAt: Scalars['Date'];
  detail?: Maybe<Scalars['String']>;
  image?: Maybe<Array<AttachmentModel>>;
  name: Scalars['String'];
  projects?: Maybe<Array<ProjectModel>>;
  tags?: Maybe<Array<TagModel>>;
  updatedAt: Scalars['Date'];
  usersOnWorkspaces: Array<UsersOnWorkspaces>;
};

export type SaveAttachmentMutationVariables = Exact<{
  attachment: AddAttachmentInput;
}>;


export type SaveAttachmentMutation = { saveAttachment?: { id: number, name: string, path: string } | null };

export type SaveUserMutationVariables = Exact<{
  user: AddUserInput;
}>;


export type SaveUserMutation = { saveUser?: { id: number, name: string, email: string, emailVerified: boolean, isAnonymous: boolean, uid: string } | null };

export type FindCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentUserQuery = { findCurrentUser: { id: number, name: string, email: string, emailVerified: boolean, isAnonymous: boolean, uid: string } };

export type FindUserByIdQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type FindUserByIdQuery = { findUserById?: { name: string } | null };


export const SaveAttachmentDocument = gql`
    mutation saveAttachment($attachment: AddAttachmentInput!) {
  saveAttachment(attachment: $attachment) {
    id
    name
    path
  }
}
    `;
export type SaveAttachmentMutationFn = Apollo.MutationFunction<SaveAttachmentMutation, SaveAttachmentMutationVariables>;

/**
 * __useSaveAttachmentMutation__
 *
 * To run a mutation, you first call `useSaveAttachmentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveAttachmentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveAttachmentMutation, { data, loading, error }] = useSaveAttachmentMutation({
 *   variables: {
 *      attachment: // value for 'attachment'
 *   },
 * });
 */
export function useSaveAttachmentMutation(baseOptions?: Apollo.MutationHookOptions<SaveAttachmentMutation, SaveAttachmentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveAttachmentMutation, SaveAttachmentMutationVariables>(SaveAttachmentDocument, options);
      }
export type SaveAttachmentMutationHookResult = ReturnType<typeof useSaveAttachmentMutation>;
export type SaveAttachmentMutationResult = Apollo.MutationResult<SaveAttachmentMutation>;
export type SaveAttachmentMutationOptions = Apollo.BaseMutationOptions<SaveAttachmentMutation, SaveAttachmentMutationVariables>;
export const SaveUserDocument = gql`
    mutation saveUser($user: AddUserInput!) {
  saveUser(user: $user) {
    id
    name
    email
    emailVerified
    isAnonymous
    uid
  }
}
    `;
export type SaveUserMutationFn = Apollo.MutationFunction<SaveUserMutation, SaveUserMutationVariables>;

/**
 * __useSaveUserMutation__
 *
 * To run a mutation, you first call `useSaveUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSaveUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [saveUserMutation, { data, loading, error }] = useSaveUserMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSaveUserMutation(baseOptions?: Apollo.MutationHookOptions<SaveUserMutation, SaveUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SaveUserMutation, SaveUserMutationVariables>(SaveUserDocument, options);
      }
export type SaveUserMutationHookResult = ReturnType<typeof useSaveUserMutation>;
export type SaveUserMutationResult = Apollo.MutationResult<SaveUserMutation>;
export type SaveUserMutationOptions = Apollo.BaseMutationOptions<SaveUserMutation, SaveUserMutationVariables>;
export const FindCurrentUserDocument = gql`
    query findCurrentUser {
  findCurrentUser {
    id
    name
    email
    emailVerified
    isAnonymous
    uid
  }
}
    `;

/**
 * __useFindCurrentUserQuery__
 *
 * To run a query within a React component, call `useFindCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<FindCurrentUserQuery, FindCurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCurrentUserQuery, FindCurrentUserQueryVariables>(FindCurrentUserDocument, options);
      }
export function useFindCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCurrentUserQuery, FindCurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCurrentUserQuery, FindCurrentUserQueryVariables>(FindCurrentUserDocument, options);
        }
export type FindCurrentUserQueryHookResult = ReturnType<typeof useFindCurrentUserQuery>;
export type FindCurrentUserLazyQueryHookResult = ReturnType<typeof useFindCurrentUserLazyQuery>;
export type FindCurrentUserQueryResult = Apollo.QueryResult<FindCurrentUserQuery, FindCurrentUserQueryVariables>;
export const FindUserByIdDocument = gql`
    query findUserById($id: Int!) {
  findUserById(id: $id) {
    name
  }
}
    `;

/**
 * __useFindUserByIdQuery__
 *
 * To run a query within a React component, call `useFindUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUserByIdQuery(baseOptions: Apollo.QueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
      }
export function useFindUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserByIdQuery, FindUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserByIdQuery, FindUserByIdQueryVariables>(FindUserByIdDocument, options);
        }
export type FindUserByIdQueryHookResult = ReturnType<typeof useFindUserByIdQuery>;
export type FindUserByIdLazyQueryHookResult = ReturnType<typeof useFindUserByIdLazyQuery>;
export type FindUserByIdQueryResult = Apollo.QueryResult<FindUserByIdQuery, FindUserByIdQueryVariables>;