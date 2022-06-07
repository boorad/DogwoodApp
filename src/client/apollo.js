import {ApolloClient, InMemoryCache} from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: 'https://api.thedogwood.com/v1/graphql',
  cache: new InMemoryCache(),
});
