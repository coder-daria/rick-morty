import { formatDate } from '../../../common/utils/date';

export default ({ created, dimension, name, type, residents } = {}) => ({
  name,
  created: created ? formatDate(created) : undefined,
  dimension,
  type,
  residents,
});
