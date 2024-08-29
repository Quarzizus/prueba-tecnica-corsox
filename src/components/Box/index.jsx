import { useContext } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "../../context/appContext";
import { EDIT_BOXES } from "../../reducer/types";

const Box = ({ value = "", coordinates }) => {
  const [store, dispatch] = useContext(AppContext);

  const handleClick = () => {
    dispatch({
      type: EDIT_BOXES,
      payload: { coordinates: coordinates, value: "X" },
    });
  };

  return (
    <article className={styles.Box} onClick={handleClick}>
      {value}
    </article>
  );
};

export { Box };
