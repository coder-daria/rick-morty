import React from 'react';
import { map } from 'ramda';
import { v4 as uuid } from 'uuid';

export const renderCharactersNames = characters =>
  map(({ name }) => <div key={uuid()}>{name}</div>, characters);
