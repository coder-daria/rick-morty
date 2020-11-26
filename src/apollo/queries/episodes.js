import { gql } from '@apollo/client';

export const GET_EPISODES = gql`
  query episodes($page: Int, $filter: FilterEpisode) {
    episodes(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
        characters {
          name
        }
        created
      }
    }
  }
`;

export const GET_EPISODE_BY_ID = gql`
  query episode($id: ID!) {
    episode(id: $id) {
      id
      name
      air_date
      episode
      characters {
        name
      }
      created
    }
  }
`;
