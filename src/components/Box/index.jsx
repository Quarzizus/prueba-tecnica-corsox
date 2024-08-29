import { useContext } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "../../context/appContext";
import { CHANGE_PLAYER, EDIT_BOXES } from "../../reducer/types";
import Equix from "../../assets/equix.png";
import Circle from "../../assets/circle.png";

const Box = ({ value = "", coordinates }) => {
  const [store, dispatch] = useContext(AppContext);

  const icons = {
    X: Equix,
    O: Circle,
  };

  const handleClick = () => {
    const character = store.player === 1 ? "X" : "O";

    dispatch({
      type: EDIT_BOXES,
      payload: { coordinates: coordinates, value: character },
    });
    dispatch({
      type: CHANGE_PLAYER,
      payload: store.player === 1 ? 2 : 1,
    });
  };

  return (
    <article className={styles.Box} onClick={handleClick}>
      {value && <img src={icons[value]} alt="icon" />}
    </article>
  );
};

export { Box };
