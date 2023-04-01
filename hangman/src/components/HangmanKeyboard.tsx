import styles from "./HangmanKeyboard.module.css";
import keys from "./keys";

type HangmanKeyboardProps = {
  disabled?: boolean;
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

const HangmanKeyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: HangmanKeyboardProps) => {
  return (
    <div className={styles.keyContainer}>
      {keys.map((key, index: any) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.key} ${isActive ? styles.active : ""} ${
              isInactive ? styles.inactive : ""
            }`}
            disabled={isInactive || isActive || disabled}
            key={index}>
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default HangmanKeyboard;
