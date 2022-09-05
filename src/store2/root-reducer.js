import {combineReducers} from 'redux';

import {todos} from './todos/todos-reducer';
import {filter} from './filters/filters-reduser'

export const rootReducer = combineReducers({
  todos,
  filter,
});