import { combineReducers } from 'redux';

import AnswersReducer from './answers-reducer';
import QuestionsReducer from './questions-reducer';

const rootReducer = combineReducers({
  answer: AnswersReducer,
  question: QuestionsReducer,
});

export default rootReducer;
