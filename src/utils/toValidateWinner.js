import { getPrincipalDiagonal, getSecondaryDiagonal } from "./getDiagonals";
import { transposedMatrix } from "./trasposedMatrix";

const boxesMock = [
  ["O", "X", "O"],
  ["O", "O", "X"],
  ["O", "O", "X"],
];

const toValidateWinner = (boxes = boxesMock) => {
  let isWinner = false;
  const casesWinners = ["XXX", "OOO"];
  const trasposedBoard = transposedMatrix(boxes);
  const principalDiagonal = getPrincipalDiagonal(boxes);
  const secondaryDiagonal = getSecondaryDiagonal(boxes);

  // case 1
  boxes.forEach((column) => {
    if (casesWinners.includes(column.join(""))) {
      isWinner = true;
      return isWinner;
    }
  });

  // case 2
  trasposedBoard.forEach((column) => {
    if (casesWinners.includes(column.join(""))) {
      isWinner = true;
      return isWinner;
    }
  });

  // case 3
  if (casesWinners.includes(principalDiagonal.join(""))) {
    isWinner = true;
    return true;
  }

  // case 4
  if (casesWinners.includes(secondaryDiagonal.join(""))) {
    isWinner = true;
    return true;
  }

  return isWinner;
};

export { toValidateWinner };
