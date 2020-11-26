import { LOCATIONS_MOCKED_DATA } from '../../__mocks__/locations-mock-data';

import { formatDate } from '../../../../common/utils/date';

import getLocationsData from '../LocationsModel';

const {
  locations: { results, info },
} = LOCATIONS_MOCKED_DATA;

const [FIRST_LOCATION] = results;

describe('LocationsModel', () => {
  it('should return locations data', () => {
    const result = getLocationsData(LOCATIONS_MOCKED_DATA, jest.fn());

    expect(result).toMatchSnapshot({
      locations: [
        {
          ...FIRST_LOCATION,
          created: formatDate(FIRST_LOCATION.created),
          residents: FIRST_LOCATION.residents.length,
        },
      ],
      pageInfo: info,
    });
  });
});
