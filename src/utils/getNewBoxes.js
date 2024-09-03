const getNewBoxes = ({ coordinates, value, boxes }) => {
  return boxes.map((rows, rowId) => {
    if (rowId === coordinates[0]) {
      return rows.map((box, boxId) => {
        if (boxId === coordinates[1]) {
          return value;
        }
        return box;
      });
    }
    return rows;
  });
};

export { getNewBoxes };
