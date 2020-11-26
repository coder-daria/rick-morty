import { LOCATION_DETAILS_MOCKED_DATA } from '../../__mocks__/location-mock-data';

import getLocationData from '../LocationModel';

describe('LocationModel', () => {
  it('should return location data', () => {
    const result = getLocationData(LOCATION_DETAILS_MOCKED_DATA);

    expect(result).toMatchSnapshot(LOCATION_DETAILS_MOCKED_DATA);
  });
});
