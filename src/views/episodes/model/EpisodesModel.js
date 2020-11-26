import { map } from 'ramda';

const structureEpisodesData = (episodes = []) =>
  map(
    ({ id, name, episode, characters }) => ({
      characters: characters.length,
      episode,
      id,
      name,
    }),
    episodes,
  );

export default ({ episodes } = {}) => ({
  episodes: structureEpisodesData(episodes?.results),
  pageInfo: episodes?.info,
});
