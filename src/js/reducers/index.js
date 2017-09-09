import { combineReducers } from 'redux';

import QuestionsReducer from './questions-reducer';

const rootReducer = combineReducers({
  questions: QuestionsReducer,
});

export default rootReducer;
