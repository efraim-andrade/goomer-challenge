import { combineReducers } from 'redux';

import modal from './modal/reducer';
import restaurants from './restaurants/reducer';

export default combineReducers({
  modal,
  restaurants,
});
