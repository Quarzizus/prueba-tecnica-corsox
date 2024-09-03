import {
  getPrincipalDiagonal,
  getSecondaryDiagonal,
} from "../utils/getDiagonals";
import { transposedMatrix } from "../utils/trasposedMatrix";

const useValidateGame = () => {
  const winnerCases = ["###", "&&&"];
  let isWinner = false;
  const validateGame = (boxes) => {
    const boxesTrasposed = transposedMatrix(boxes);
    const principalDiagonal = getPrincipalDiagonal(boxes);
    const secondaryDiagonal = getSecondaryDiagonal(boxes);

    // case 1
    boxes.forEach((column) => {
      if (winnerCases.includes(column.join(""))) {
        isWinner = true;
      }
    });
    // case 2
    boxesTrasposed.forEach((column) => {
      if (winnerCases.includes(column.join(""))) {
        isWinner = true;
      }
    });
    // case 3
    if (winnerCases.includes(principalDiagonal.join(""))) {
      isWinner = true;
    }
    // case 4
    if (winnerCases.includes(secondaryDiagonal.join(""))) {
      isWinner = true;
    }

    return isWinner;
  };

  return { validateGame };
};

export { useValidateGame };
