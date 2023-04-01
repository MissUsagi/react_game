import classes from "./HangmanWord.module.css";

type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};
const HangmanWord = ({
  guessedLetters,
  wordToGuess,
  reveal = false,
}: HangmanWordProps) => {
  return (
    <div className={classes.wordContainer}>
      {wordToGuess.split("").map((char, index) => (
        <span className={classes.charContainer} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(char) || reveal ? "visible" : "hidden",
              color: !guessedLetters.includes(char) && reveal ? "red" : "black",
            }}>
            {char}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
