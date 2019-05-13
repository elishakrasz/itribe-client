import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag'
// import { graphql } from 'react-apollo'
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { createUploadLink } from 'apollo-upload-client'

const link = createUploadLink({
  uri: 'http://localhost:4000/',
      credentials: 'same-origin'
})
export const client = new ApolloClient({
  // link: ApolloLink.from([
  //   onError(({ graphQLErrors, networkError }) => {
  //     if (graphQLErrors)
  //       graphQLErrors.map(({ message, locations, path }) =>
  //         console.log(
  //           `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
  //         ),
  //       );
  //     if (networkError) console.log(`[Network error]: ${networkError}`);
  //   }),
  //   new HttpLink({
  //     uri: 'http://localhost:4000/',
  //     credentials: 'same-origin'
  //   })
  // ]),
  link,
  cache: new InMemoryCache()
});