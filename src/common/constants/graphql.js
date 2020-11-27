const { freeze } = Object;

export const GRAPHQL_FETCH_POLICY = freeze({
  CACHE_FIRST: 'cache-first',
  CACHE_ONLY: 'cache-only',
  CACHE_AND_NETWORK: 'cache-and-network',
});
