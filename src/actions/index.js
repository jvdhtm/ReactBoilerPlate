import { malmo } from '../data/malmo';
import { lund } from '../data/lund';
import { kristianstad } from '../data/kristianstad';

export function selectLocation(city) {


  let payload;
  switch (city) {
    case 'lund':
      payload = lund();
      break;
    case 'malmo':
      payload = malmo();
      break;
    case 'kristianstad':
      payload = kristianstad();
      break;
    default:
      payload = {};
      break;
  }

  return {
    type: 'CITY_SELECTED',
    payload,
  };
}
