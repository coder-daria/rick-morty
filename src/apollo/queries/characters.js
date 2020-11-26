import { gql } from '@apollo/client';

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
