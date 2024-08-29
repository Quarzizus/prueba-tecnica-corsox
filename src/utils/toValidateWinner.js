import { getPrincipalDiagonal, getSecondaryDiagonal } from "./getDiagonals";
import { transposedMatrix } from "./trasposedMatrix";

const boxesMock = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const toValidateWinner = (boxes = boxesMock) => {
  let isWinner = false;
  const trasposedBoard = transposedMatrix(boxes);
  const principalDiagonal = getPrincipalDiagonal(boxes);
  const secondaryDiagonal = getSecondaryDiagonal(boxes);

  // case 1
  boxes.forEach((column) => {
    column.every((box) => {
      if (box === "X" || box === "O") {
        isWinner = true;
      }
    });
  });

  // case 2
  trasposedBoard.forEach((column) => {
    column.every((box) => {
      if (box === "X" || box === "O") {
        isWinner = true;
      }
    });
  });

  // case 3
  principalDiagonal.every((box) => {
    if (box === "X" || box === "O") {
      isWinner = true;
    }
  });

  // case 4
  secondaryDiagonal.every((box) => {
    if (box === "X" || box === "O") {
      isWinner = true;
    }
  });

  return isWinner;
};

export { toValidateWinner };
