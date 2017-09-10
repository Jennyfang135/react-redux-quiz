import { UPDATE_SCORE } from '../actions/update-score';

export default function (state = { score: 0, justUpdated: false }, action) {
  switch (action.type) {
    case UPDATE_SCORE: {
      let newScore = action.payload.score;
      if (action.payload.justUpdated === true) {
        newScore = action.payload.score + 1;
      }
      return {
        score: newScore,
        justUpdated: true,
      };
    }
    default: {
      return {
        score: state.score,
        justUpdated: false,
      };
    }
  }
}
