import React from 'react';
import { map } from 'ramda';

export const renderCharactersNames = characters =>
  map(
    ({ name }, index) => <div key={`${name + index}`}>{name}</div>,
    characters,
  );
