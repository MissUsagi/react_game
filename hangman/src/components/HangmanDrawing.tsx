import classes from "./HangmanDrawing.module.css";
const HEAD = <div className={classes.head} />;
const LEFTARM = <div className={classes.leftArm} />;
const RIGHTARM = <div className={classes.rightArm} />;
const LEFTLEG = <div className={classes.leftLeg} />;
const RIGHTLEG = <div className={classes.rightLeg} />;
const BODY = <div className={classes.body} />;

const BODY_PARTS = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHTLEG, LEFTLEG];

type HangmanDrawingsProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingsProps) => {
  return (
    <div className={classes.hangmanContainer}>
      <div className={classes.topVerticalLine} />
      <div className={classes.topHorizontalLine} />
      <div className={classes.verticalLine} />
      <div className={classes.bottomLine} />
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </div>
  );
};

export default HangmanDrawing;
