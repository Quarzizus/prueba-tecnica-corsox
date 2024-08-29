import { toValidateWinner } from "../utils/toValidateWinner";
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
    case EDIT_BOXES:
      const { coordinates, value } = action.payload;
      let newBoxes = state.boxes;
      if (newBoxes[coordinates[0]][coordinates[1]] !== null)
        return { ...state };
      newBoxes[coordinates[0]][coordinates[1]] = value;
      return {
        ...state,
        boxes: newBoxes,
      };
    case RESET_GAME: {
      return initialState;
    }
    case CHANGE_PLAYER:
      return {
        ...state,
        player: action.payload,
      };
    case VALIDATE_WINNER:
      const validateIsWinner = toValidateWinner(state.boxes);
      return {
        ...state,
        isWinner: validateIsWinner,
      };
    case FINISH_GAME: {
      return {
        ...state,
        isFinishGame: true,
        whoIsWinner: state.player === 1 ? 2 : 1,
      };
    }
    default:
      return state;
  }
};

export { reducer, initialState };
