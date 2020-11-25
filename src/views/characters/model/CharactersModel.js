const structureCharactersData = characters =>
  characters?.map(({ id, location, name, origin, species }) => ({
    id,
    location: location.name,
    name,
    origin: origin.name,
    species,
  }));

export default ({ characters } = {}) => ({
  characters: structureCharactersData(characters?.results),
  pageInfo: characters?.info,
});
