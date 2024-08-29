import { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
import { Box } from "../Box";
import { AppContext } from "../../context/appContext";
import { FINISH_GAME, VALIDATE_WINNER } from "../../reducer/types";

const Board = () => {
  const [store, dispatch] = useContext(AppContext);

  useEffect(() => {
    // const finishGame = store.boxes
    //   .flatMap((box) => box)
    //   .every((box) => box !== null);
    // dispatch({ type: VALIDATE_WINNER });
    // if (finishGame || store.isWinner) {
    //   dispatch({ type: FINISH_GAME });
    // }
  }, [store.player]);

  return (
    <section className={styles.Board}>
      {!store.isFinishGame &&
        store.boxes.map((row, rowId) => {
          return row.map((box, columnId) => (
            <Box value={box} coordinates={[rowId, columnId]} />
          ));
        })}
    </section>
  );
};
export { Board };
