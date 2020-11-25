import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

import {
  CHARACTER_DETAILED_MOCKED_DATA,
  CHARACTER_NOT_FORMATED_MOCKED_DETAILS,
} from '../../__mocks__/character-mock-data';

import CharacterDetails from '../CharacterDetails';

const setup = () =>
  shallow(
    <CharacterDetails
      character={{
        ...CHARACTER_DETAILED_MOCKED_DATA,
        ...CHARACTER_NOT_FORMATED_MOCKED_DETAILS,
      }}
    />,
  );

describe('<CharacterDetails />', () => {
  it('should match the snapshot', () => {
    const wrapper = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
