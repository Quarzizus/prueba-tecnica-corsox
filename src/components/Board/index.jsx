import { useContext } from "react";
import styles from "./styles.module.scss";
import { Box } from "../Box";
import { AppContext } from "../../context/appContext";
import { RESET_GAME } from "../../reducer/types";

const Board = () => {
  const [store, dispatch] = useContext(AppContext);

  const handleClick = () => {
    dispatch({ type: RESET_GAME });
  };

  return (
    <section className={styles.Board}>
      {/* Juego */}
      {!store.isFinishGame &&
        store.boxes.map((row, rowId) => {
          return row.map((box, columnId) => (
            <Box key={columnId} value={box} coordinates={[rowId, columnId]} />
          ));
        })}
      {/* Ganador */}
      {store.isFinishGame && store.isWinner && (
        <section className={styles.container}>
          <p>El ganador es el Player N°{store.whoIsWinner}</p>
          <button onClick={handleClick}>Reiniciar</button>
        </section>
      )}
      {/* Empate */}
      {store.isFinishGame && !store.isWinner && (
        <section className={styles.container}>
          <p>Empate</p>
          <button onClick={handleClick}>Reiniciar</button>
        </section>
      )}
    </section>
  );
};
export { Board };
