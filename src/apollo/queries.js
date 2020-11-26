import { gql } from '@apollo/client';

export const GET_SELECTED_LIST_ITEM = gql`
  query GetSelectedListItem {
    selectedListItem @client
  }
`;

export const GET_CHARACTERS = gql`
  query characters($page: Int, $filter: FilterCharacter) {
    characters(page: $page, filter: $filter) {
      info {
        pages
        count
        next
        prev
      }
      results {
        id
        name
        species
        origin {
          name
        }
        location {
          name
        }
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query character($id: ID!) {
    character(id: $id) {
      name
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
      image
      episode {
        name
      }
      created
    }
  }
`;

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

export const GET_LOCATIONS = gql`
  query locations($page: Int, $filter: FilterLocation) {
    locations(page: $page, filter: $filter) {
      info {
        count
        next
        pages
        prev
      }
      results {
        created
        dimension
        id
        name
        residents {
          name
        }
        type
      }
    }
  }
`;

export const GET_LOCATION_BY_ID = gql`
  query location($id: ID!) {
    location(id: $id) {
      created
      dimension
      id
      name
      type
      residents {
        name
      }
    }
  }
`;
