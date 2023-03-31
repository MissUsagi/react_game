import styles from "./HangmanKeyboard.module.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const HangmanKeyboard = () => {
  return (
    <div className={styles.keyContainer}>
      {KEYS.map((key) => (
        <button className={styles.key}>{key}</button>
      ))}
    </div>
  );
};

export default HangmanKeyboard;
