import { CHANGE_PLAYER, EDIT_BOXES, RESET_GAME } from "./types";

const initialState = {
  boxes: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  player: 1,
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
    default:
      return state;
  }
};

export { reducer, initialState };
