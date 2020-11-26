import React, { useMemo } from 'react';
import { instanceOf, shape, string } from 'prop-types';
import { Col } from 'antd';

import { renderCharactersNames } from '../../../common/utils/characters';

import LocationModel from '../model/LocationModel';

import { StyledRow } from './LocationDetails.styles';

const NO_DATA_PLACEHOLDER = '-';

function LocationDetails({ location }) {
  const locationDetails = useMemo(() => LocationModel(location), [location]);

  return (
    <div>
      {Object.keys(locationDetails).map(item => (
        <StyledRow key={item}>
          <Col span={12}>{item}</Col>
          <Col span={12}>
            {item === 'residents'
              ? renderCharactersNames(locationDetails[item])
              : locationDetails[item] || NO_DATA_PLACEHOLDER}
          </Col>
        </StyledRow>
      ))}
    </div>
  );
}

LocationDetails.propTypes = {
  location: shape({
    id: string,
    created: string,
    dimension: string,
    name: string,
    type: string,
    residents: instanceOf(Array),
  }).isRequired,
};

export default LocationDetails;
