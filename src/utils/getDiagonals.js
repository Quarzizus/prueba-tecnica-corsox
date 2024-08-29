const getPrincipalDiagonal = (board) => {
  return board.map((row, index) => row[index]);
};

const getSecondaryDiagonal = (board) => {
  return board.map((row, index) => row[row.length - 1 - index]);
};

export { getPrincipalDiagonal, getSecondaryDiagonal };
