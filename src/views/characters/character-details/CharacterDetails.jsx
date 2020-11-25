import React, { useMemo } from 'react';
import { number, shape, string } from 'prop-types';
import { Col, Divider } from 'antd';

import CharacterModel from '../model/CharacterModel';
import { StyledRow, CharacterImg } from './CharacterDetails.styles';

const NO_DATA_PLACEHOLDER = '-';

function CharacterDetails({ character }) {
  const characterDetails = useMemo(() => CharacterModel(character), [
    character,
  ]);

  return (
    <div>
      {Object.keys(characterDetails).map(item => (
        <StyledRow key={item}>
          {item === 'name' && (
            <span>{characterDetails.name || NO_DATA_PLACEHOLDER}</span>
          )}
          {item === 'image' && (
            <>
              <CharacterImg alt={item} src={characterDetails[item]} />
              <Divider />
            </>
          )}
          {item !== 'name' && item !== 'image' && (
            <>
              <Col span={12}>{item}</Col>
              <Col span={12}>
                {characterDetails[item] || NO_DATA_PLACEHOLDER}
              </Col>
            </>
          )}
        </StyledRow>
      ))}
    </div>
  );
}

CharacterDetails.propTypes = {
  character: shape({
    created: string,
    episode: number,
    gender: string,
    image: string,
    location: string,
    name: string,
    origin: string,
    species: string,
    status: string,
    type: string,
  }).isRequired,
};

export default CharacterDetails;
