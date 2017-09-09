import { combineReducers } from 'redux';

import QuestionsReducer from './questions-reducer';

const rootReducer = combineReducers({
  question: QuestionsReducer,
});

export default rootReducer;
