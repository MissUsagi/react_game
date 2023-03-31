import { useState } from "react";
import words from "./wordList.json";
import styles from "./App.module.css";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import HangmanKeyboard from "./components/HangmanKeyboard";
const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  return (
    <div className={styles.container}>
      <div className={styles.endgameTxt}></div>
      <HangmanDrawing />
      <HangmanWord char="5" />
      <div style={{ alignSelf: "stretch" }}>
        <HangmanKeyboard />
      </div>
    </div>
  );
};

export default App;
