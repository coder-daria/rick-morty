import getCharacterData from '../CharacterModel';

import {
  CHARACTER_DETAILED_MOCKED_DATA,
  CHARACTER_FORMATED_MOCKED_DETAILS,
  CHARACTER_NOT_FORMATED_MOCKED_DETAILS,
} from '../../__mocks__/character-mock-data';

describe('CharacterModel', () => {
  it('should return character data', () => {
    const result = getCharacterData(
      {
        ...CHARACTER_DETAILED_MOCKED_DATA,
        ...CHARACTER_NOT_FORMATED_MOCKED_DETAILS,
      },
      jest.fn(),
    );

    expect(result).toMatchSnapshot({
      ...CHARACTER_DETAILED_MOCKED_DATA,
      ...CHARACTER_FORMATED_MOCKED_DETAILS,
      episode: 0,
    });
  });
});
