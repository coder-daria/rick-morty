import { CHARACTER_NOT_FORMATED_MOCKED_DETAILS } from '../../../views/characters/__mocks__/character-mock-data';

export const PAGE_INFO = {
  pages: 1,
  count: 1,
  next: null,
  prev: null,
};

export const TABLE_DATA = {
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Species',
      dataIndex: 'species',
      key: 'species',
    },
    {
      title: 'Origin',
      dataIndex: 'origin',
      key: 'origin',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
  ],
  loading: false,
  pageInfo: PAGE_INFO,
  tableData: [
    {
      id: 1,
      name: 'Rick Sanchez',
      species: 'Alien',
      ...CHARACTER_NOT_FORMATED_MOCKED_DETAILS,
    },
  ],
  toggleDrawer: jest.fn(),
  setCurrentPage: jest.fn(),
};
