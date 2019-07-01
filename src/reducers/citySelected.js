import { lund } from '../data/lund';

export default function(state = lund(), action) {
  switch (action.type) {
    case 'CITY_SELECTED':
      return action.payload;

    default:
      return state;
  }
}
