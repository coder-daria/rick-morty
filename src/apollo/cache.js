import { InMemoryCache, makeVar } from '@apollo/client';

export const selectedListItemVar = makeVar(1);
export const isDrawerOpenVar = makeVar(false);

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: [],
          merge(existing, incoming) {
            let results = [];

            if (existing) {
              results = [...existing.results, ...incoming.results];
            } else {
              results = incoming.results;
            }

            return {
              info: incoming.info,
              results,
            };
          },
        },
      },
    },
  },
});

export default cache;
