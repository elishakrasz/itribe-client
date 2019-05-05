import { gql } from "apollo-boost";

export const SIGNUP_USER = gql`
  mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    register(firstName: $firstName, lastName:$lastName ,email: $email, password: $password) {
      message
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      message
    }
  }
`;
