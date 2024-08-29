import { useContext } from "react";
import styles from "./styles.module.scss";
import { AppContext } from "../../context/appContext";

const Player = ({ id, color }) => {
  const [store] = useContext(AppContext);

  const inlineStyles = {
    backgroundColor: color,
    opacity: store.player === id ? 1 : 0.5,
  };

  return (
    <aside className={styles.Player} style={inlineStyles}>
      <p>Player N°{id}</p>
    </aside>
  );
};

export { Player };
