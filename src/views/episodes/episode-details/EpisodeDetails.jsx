import React, { useMemo } from 'react';
import { instanceOf, shape, string } from 'prop-types';
import { Col } from 'antd';

import CharacterModel from '../model/EpisodeModel';

import { StyledRow } from './EpisodeDetails.styles';

const NO_DATA_PLACEHOLDER = '-';

function renderCharactersNames(characters) {
  return characters.map(({ name, index }) => (
    <div key={`${name + index}`}>{name}</div>
  ));
}

function EpisodeDetails({ episode }) {
  const characterDetails = useMemo(() => CharacterModel(episode), [episode]);

  return (
    <div>
      {Object.keys(characterDetails).map(item => (
        <StyledRow key={item}>
          <Col span={12}>{item}</Col>
          <Col span={12}>
            {item === 'characters'
              ? renderCharactersNames(characterDetails[item])
              : characterDetails[item] || NO_DATA_PLACEHOLDER}
          </Col>
        </StyledRow>
      ))}
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
