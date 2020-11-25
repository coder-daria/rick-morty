import { ApolloClient } from '@apollo/client';

import cache from './cache';

const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';

export const client = new ApolloClient({
  uri: GRAPHQL_URL,
  connectToDevTools: process.env.NODE_ENV === 'development',
  cache,
});
