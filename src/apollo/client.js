import { ApolloClient } from '@apollo/client';

import cache from './cache';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  connectToDevTools: process.env.NODE_ENV === 'development',
  cache,
});
