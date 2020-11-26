import { formatDate } from '../../../common/utils/date';

const structureLocationsData = locations =>
  locations?.map(({ created, dimension, id, name, type, residents }) => ({
    id,
    created: created ? formatDate(created) : undefined,
    dimension,
    name,
    type,
    residents: residents.length,
  }));

export default ({ locations } = {}) => ({
  locations: structureLocationsData(locations?.results),
  pageInfo: locations?.info,
});
