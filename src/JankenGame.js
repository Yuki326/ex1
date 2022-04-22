import { React, useState } from "react";
const HAND = ["Gu", "Choki", "Pa"];
const JankenGame = () => {
  const [myHand, setMyHand] = useState(0);
  const [opponentHand, setOpponentHand] = useState(
    Math.floor(Math.random() * 2)
  );
  const [result, setResult] = useState("");
  const initialize = () => {
    setOpponentHand(Math.floor(Math.random() * 2));
    setResult("");
  };

  const handleMyHandSelected = (hand) => {
    setMyHand(hand);
  };
  const handleHandSubmited = () => {
    console.log("submited");
    switch ((myHand - opponentHand + 3) % 3) {
      case 0:
        setResult("draw");
        break;
      case 1:
        setResult("lose");
        break;
      case 2:
        setResult("win");
        break;
      default:
        setResult("");
    }
    console.log(result);
  };
  const getMessage = () => {
    let message = "test";
    switch (result) {
      case "win":
        message = "あなたの勝ち！";
        break;
      case "lose":
        message = "あなたの負け！";
        break;
      case "draw":
        message = "引き分け！";
        break;
      default:
        message = "";
    }
    return message;
  };
  return (
    <div>
      <h1>ジャンケン</h1>
      <h1>出す手を選んでね！</h1>
      {!result && (
        <>
          <button
            onClick={() => {
              handleMyHandSelected(0);
            }}
          >
            Gu
          </button>
          <button
            onClick={() => {
              handleMyHandSelected(1);
            }}
          >
            Choki
          </button>
          <button
            onClick={() => {
              handleMyHandSelected(2);
            }}
          >
            Pa
          </button>
          <h2>選んだ手：{HAND[myHand]}</h2>
          <button
            onClick={() => {
              handleHandSubmited();
            }}
          >
            確定
          </button>
        </>
      )}

      {!!result && (
        <>
          <h2>{getMessage(result)}</h2>
          <h2>相手の手：{HAND[myHand]}</h2>
          <button onClick={initialize}>もう一回</button>
        </>
      )}
    </div>
  );
};

export default JankenGame;
