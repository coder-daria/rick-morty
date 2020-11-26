import React, { useMemo } from 'react';
import { instanceOf, shape, string } from 'prop-types';
import { Col, Divider } from 'antd';
import { v4 as uuid } from 'uuid';
import { map } from 'ramda';

import CharacterModel from '../model/CharacterModel';
import { StyledRow, CharacterImg } from './CharacterDetails.styles';

const NO_DATA_PLACEHOLDER = '-';

function CharacterDetails({ character }) {
  const characterDetails = useMemo(() => CharacterModel(character), [
    character,
  ]);

  return (
    <div>
      {map(item => {
        const isNameKey = item === 'name';
        const isImageKey = item === 'image';
        const value = characterDetails[item];

        return (
          <StyledRow key={uuid()}>
            {isNameKey && <span>{value || NO_DATA_PLACEHOLDER}</span>}
            {isImageKey && (
              <>
                <CharacterImg fallback={item} alt={item} src={value} />
                <Divider />
              </>
            )}
            {!isNameKey && !isImageKey && (
              <>
                <Col span={12}>{item}</Col>
                <Col span={12}>{value || NO_DATA_PLACEHOLDER}</Col>
              </>
            )}
          </StyledRow>
        );
      }, Object.keys(characterDetails))}
    </div>
  );
}

CharacterDetails.propTypes = {
  character: shape({
    created: string,
    episode: instanceOf(Array),
    gender: string,
    image: string,
    location: instanceOf(Object),
    name: string,
    origin: instanceOf(Object),
    species: string,
    status: string,
    type: string,
  }).isRequired,
};

export default CharacterDetails;
