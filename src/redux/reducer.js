import { combineReducers } from 'redux';

import entitiesReducer from './nodes/entities/reducer';
import featuresReducer from './nodes/features/reducer';

export default combineReducers({
  entities: entitiesReducer,
  // features: featuresReducer,
});