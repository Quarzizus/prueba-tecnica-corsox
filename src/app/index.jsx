import { Board } from "../components/Board";
import { Player } from "../components/Player";
import { AppProvider } from "../context/appContext";
import styles from "./styles.module.scss";

function App() {
  return (
    <main className={styles.Main}>
      <AppProvider>
        <Player id={1} color={"red"} />
        <Board />
        <Player id={2} color={"blue"} />
      </AppProvider>
    </main>
  );
}

export default App;
