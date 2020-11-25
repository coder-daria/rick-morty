import React, { useMemo } from 'react';
import { instanceOf, shape, string } from 'prop-types';
import { Col } from 'antd';

import CharacterModel from '../model/EpisodeModel';
import { StyledRow } from './EpisodeDetails.styles';

const NO_DATA_PLACEHOLDER = '-';

function EpisodeDetails({ episode }) {
  const characterDetails = useMemo(() => CharacterModel(episode), [episode]);

  const renderCharactersNames = characters => {
    return characters.map(({ name }) => <div key={`${name}`}>{name}</div>);
  };

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
    created: string,
    'air date': string,
    episode: string,
    characters: instanceOf(Array),
  }).isRequired,
};

export default EpisodeDetails;
