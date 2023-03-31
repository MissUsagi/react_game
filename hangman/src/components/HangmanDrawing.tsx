import classes from "./HangmanDrawing.module.css";
const HEAD = <div className={classes.head} />;
const LEFTARM = <div className={classes.leftArm} />;
const RIGHTARM = <div className={classes.rightArm} />;
const LEFTLEG = <div className={classes.leftLeg} />;
const RIGHTLEG = <div className={classes.rightLeg} />;
const BODY = <div className={classes.body} />;
const HangmanDrawing = () => {
  return (
    <div className={classes.hangmanContainer}>
      <div className={classes.topVerticalLine} />
      <div className={classes.topHorizontalLine} />
      <div className={classes.verticalLine} />
      <div className={classes.bottomLine} />
      {HEAD}
      {LEFTARM}
      {RIGHTARM}
      {LEFTLEG}
      {RIGHTLEG}
      {BODY}
    </div>
  );
};

export default HangmanDrawing;
