import {
  CHANGE_PLAYER,
  EDIT_BOXES,
  FINISH_GAME,
  RESET_GAME,
  VALIDATE_WINNER,
} from "./types";

const initialState = {
  boxes: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  player: 1,
  isWinner: null,
  whoIsWinner: null,
  isFinishGame: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_BOXES: {
      return {
        ...state,
        boxes: action.payload,
      };
    }
    case RESET_GAME: {
      return initialState;
    }
    case CHANGE_PLAYER:
      return {
        ...state,
        player: action.payload,
      };
    case VALIDATE_WINNER:
      return {
        ...state,
        isWinner: action.payload,
      };
    case FINISH_GAME: {
      return {
        ...state,
        isFinishGame: true,
        whoIsWinner: action.payload,
      };
    }
    default:
      return state;
  }
};

export { reducer, initialState };
