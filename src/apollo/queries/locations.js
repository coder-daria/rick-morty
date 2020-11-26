import { gql } from '@apollo/client';

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
