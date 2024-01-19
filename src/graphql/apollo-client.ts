import { ApolloClient, InMemoryCache, gql, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { apiUrl } from './config';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.log(
        `>>> [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
      console.log({ extensions });
    });
  }
  if (networkError) console.log(`>>> [Network error]: ${networkError}`);
});

const httpLink = new HttpLink({ uri: apiUrl });

// export const httpClient = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: from([errorLink, httpLink]),
// });

export const httpClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: apiUrl,

  headers: {
    user_id: 'q45aTgEkvpaWKBpLAsNp9lHcuRr2',
  },
});
