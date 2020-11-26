import { map } from 'ramda';

const structureCharactersData = (characters = []) =>
  map(
    ({ id, location, name, origin, species }) => ({
      id,
      location: location.name,
      name,
      origin: origin.name,
      species,
    }),
    characters,
  );

export default ({ characters } = {}) => ({
  characters: structureCharactersData(characters?.results),
  pageInfo: characters?.info,
});
