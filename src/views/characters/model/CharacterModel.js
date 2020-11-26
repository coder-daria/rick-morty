import { formatDate } from '../../../common/utils/date';

export default ({
  created,
  episode,
  gender,
  image,
  location,
  name,
  origin,
  species,
  status,
  type,
} = {}) => ({
  name,
  image,
  created: created ? formatDate(created) : undefined,
  episode: episode?.length,
  gender,
  location: location?.name,
  origin: origin?.name,
  species,
  status,
  type,
});
