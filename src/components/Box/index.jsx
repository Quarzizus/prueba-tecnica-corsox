import styles from "./styles.module.scss";

const Box = ({ value = "", coordinates }) => {
  return <article className={styles.Box}>{value}</article>;
};

export { Box };
