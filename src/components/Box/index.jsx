import { useContext } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "../../context/appContext";
import {
  CHANGE_PLAYER,
  EDIT_BOXES,
  FINISH_GAME,
  VALIDATE_WINNER,
} from "../../reducer/types";
import Equix from "../../assets/equix.png";
import Circle from "../../assets/circle.png";
import { useValidateGame } from "../../hooks/useValidateGame";
import { getNewBoxes } from "../../utils/getNewBoxes";
import { toValidateFinish } from "../../utils/toValidateFinish";

const Box = ({ value = "", coordinates }) => {
  const [store, dispatch] = useContext(AppContext);
  const { handleValidate } = useValidateGame();
  const icons = {
    "#": Equix,
    "&": Circle,
  };

  const handlePlay = async () => {
    const character = store.player === 1 ? "#" : "&";
    const newBoxes = getNewBoxes({
      coordinates,
      value: character,
      boxes: store.boxes,
    });
    dispatch({
      type: EDIT_BOXES,
      payload: newBoxes,
    });
    return newBoxes;
  };

  const handleChangePlayer = (nextPlayer) => {
    dispatch({ type: CHANGE_PLAYER, payload: nextPlayer });
  };

  const handleFinish = () => {
    dispatch({ type: FINISH_GAME, payload: store.player });
  };

  const handleClick = async () => {
    const nextPlayer = store.player === 1 ? 2 : 1;
    const { isWinner, isFinish } = await handlePlay().then((newBoxes) => {
      const isWinner = handleValidate(newBoxes);
      const isFinish = toValidateFinish(newBoxes);
      return { isWinner, isFinish };
    });
    dispatch({ type: VALIDATE_WINNER, payload: isWinner });

    if (isFinish || isWinner) return handleFinish();
    handleChangePlayer(nextPlayer);
  };

  return (
    <article className={styles.Box} onClick={handleClick}>
      {value && <img src={icons[value]} alt="icon" />}
    </article>
  );
};

export { Box };
