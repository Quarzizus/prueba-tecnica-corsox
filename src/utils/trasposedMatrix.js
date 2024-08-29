const transposedMatrix = (board) => {
  return board[0].map((_box, idColumn) => board.map((row) => row[idColumn]));
};
export { transposedMatrix };
