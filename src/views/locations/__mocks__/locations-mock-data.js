import { PAGE_INFO } from '../../../components/page-layout/__mocks__/table-data';

const LOCATION_TABLE_MOCKED_DATA = {
  id: 1,
  created: '11/25/2019, 4:59:08 PM',
  dimension: '',
  name: 'Sunny day',
  type: '',
  residents: [{ name: 'Tom' }],
};

export const LOCATIONS_MOCKED_DATA = {
  locations: {
    results: [LOCATION_TABLE_MOCKED_DATA],
    info: PAGE_INFO,
  },
};
