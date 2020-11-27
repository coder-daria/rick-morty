import { InMemoryCache, makeVar } from '@apollo/client';

export const selectedListItemVar = makeVar(0);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: false,
          merge(_existing, incoming) {
            return {
              ...incoming,
            };
          },
        },
        episodes: {
          keyArgs: false,
          merge(_existing, incoming) {
            return {
              ...incoming,
            };
          },
        },
        locations: {
          keyArgs: false,
          merge(_existing, incoming) {
            return {
              ...incoming,
            };
          },
        },
      },
    },
  },
});

export default cache;
