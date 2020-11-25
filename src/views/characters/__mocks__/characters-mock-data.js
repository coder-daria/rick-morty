import { PAGE_INFO } from '../../../components/page-layout/__mocks__/table-data';
import { CHARACTER_NOT_FORMATED_MOCKED_DETAILS } from './character-mock-data';

const CHARACTER_TABLE_MOCKED_DATA = {
  id: 1,
  name: 'Rick Sanchez',
  species: 'Alien',
  ...CHARACTER_NOT_FORMATED_MOCKED_DETAILS,
};

export const CHARACTERS_MOCKED_DATA = {
  characters: {
    results: [CHARACTER_TABLE_MOCKED_DATA],
    info: PAGE_INFO,
  },
};
