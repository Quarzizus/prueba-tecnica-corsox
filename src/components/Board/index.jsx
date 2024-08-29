import { useState } from "react";
import styles from "./styles.module.scss";
import { Box } from "../Box";

const Board = () => {
  const [boxes, setBoxes] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  return (
    <section className={styles.Board}>
      {boxes.map((row, rowId) => {
        return row.map((box, columnId) => (
          <Box value={box} coordinates={[rowId, columnId]} />
        ));
      })}
    </section>
  );
};
export { Board };
