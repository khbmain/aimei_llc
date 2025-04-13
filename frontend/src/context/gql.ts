import { gql } from '@apollo/client';

export const ME = gql`
  query Me {
    me {
      id
      username
      email
      role
    }
  }
`;

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password)
  }
`;
