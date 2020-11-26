import React from 'react';

export const renderCharactersNames = characters =>
  characters.map(({ name }, index) => (
    <div key={`${name + index}`}>{name}</div>
  ));
