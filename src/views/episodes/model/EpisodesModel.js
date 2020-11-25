const structureEpisodesData = episodes =>
  episodes?.map(({ id, name, episode, characters }) => ({
    characters: characters.length,
    episode,
    id,
    name,
  }));

export default ({ episodes } = {}) => ({
  episodes: structureEpisodesData(episodes?.results),
  pageInfo: episodes?.info,
});
