/* eslint-disable camelcase */
export default ({ name, air_date, created, episode, characters } = {}) => ({
  name,
  episode,
  characters,
  'air date': air_date ? new Date(air_date).toLocaleString() : undefined,
  created: created ? new Date(created).toLocaleString() : undefined,
});
