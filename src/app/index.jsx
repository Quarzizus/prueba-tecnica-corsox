import { Board } from "../components/Board";
import { AppProvider } from "../context/appContext";
import styles from "./styles.module.scss";

function App() {
  return (
    <main className={styles.Main}>
      <AppProvider>
        <Board />
      </AppProvider>
    </main>
  );
}

export default App;
