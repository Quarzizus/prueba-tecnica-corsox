import { useContext } from "react";
import styles from "./styles.module.scss";
import { Box } from "../Box";
import { AppContext } from "../../context/appContext";

const Board = () => {
  const [store] = useContext(AppContext);
  return (
    <section className={styles.Board}>
      {store.boxes.map((row, rowId) => {
        return row.map((box, columnId) => (
          <Box value={box} coordinates={[rowId, columnId]} />
        ));
      })}
    </section>
  );
};
export { Board };
