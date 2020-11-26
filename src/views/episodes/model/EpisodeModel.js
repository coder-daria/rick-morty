import { formatDate } from '../../../common/utils/date';

/* eslint-disable camelcase */
export default ({ name, air_date, created, episode, characters } = {}) => ({
  name,
  episode,
  characters,
  'air date': air_date ? formatDate(air_date) : undefined,
  created: created ? formatDate(created) : undefined,
});
