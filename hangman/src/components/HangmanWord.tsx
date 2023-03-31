import classes from "./HangmanWord.module.css";
const word = "test";
const wordSplit = word.split("");
const guessedLetters = ["t", "e"];
const HangmanWord = (props: any) => {
  return (
    <div className={classes.wordContainer}>
      {wordSplit.map((char, index) => (
        <span className={classes.charContainer} key={index}>
          <span
            style={{
              visibility: guessedLetters.includes(char) ? "visible" : "hidden",
            }}>
            {char}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
