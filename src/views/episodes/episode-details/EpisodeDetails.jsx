import React, { useMemo } from 'react';
import { instanceOf, shape, string } from 'prop-types';
import { Col } from 'antd';
import { v4 as uuid } from 'uuid';
import { map } from 'ramda';

import { renderCharactersNames } from '../../../common/utils/characters';

import EpisodeModel from '../model/EpisodeModel';

import { StyledRow } from './EpisodeDetails.styles';

const NO_DATA_PLACEHOLDER = '-';

function EpisodeDetails({ episode }) {
  const episodeDetails = useMemo(() => EpisodeModel(episode), [episode]);

  return (
    <div>
      {map(item => {
        const value = episodeDetails[item];
        return (
          <StyledRow key={uuid()}>
            <Col span={12}>{item}</Col>
            <Col span={12}>
              {item === 'characters'
                ? renderCharactersNames(value)
                : value || NO_DATA_PLACEHOLDER}
            </Col>
          </StyledRow>
        );
      }, Object.keys(episodeDetails))}
    </div>
  );
}

EpisodeDetails.propTypes = {
  episode: shape({
    air_date: string,
    characters: instanceOf(Array),
    created: string,
    episode: string,
    id: string,
    name: string,
  }).isRequired,
};

export default EpisodeDetails;
