import { React, useState } from "react";
const GuessNumberGame = (props) => {
  const { MAX } = props;
  const [guessNumber, setGuessNumber] = useState();
  const [ansNumber, setAnsNumber] = useState(Math.floor(Math.random() * MAX));
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const initialize = () => {
    setAnsNumber(Math.floor(Math.random() * MAX));
    setGuessNumber(undefined);
    setMessage("");
    setCount(1);
  };
  const handleGuessNumberChanged = (e) => {
    setGuessNumber(e.target.value);
  };
  const countUp = () => {
    //setCount(??);
    setCount(count + 1);
  };

  const handleSubmited = (e) => {
    if (ansNumber > guessNumber) {
      setMessage(guessNumber + "より大きいです");
    } else if (ansNumber < guessNumber) {
      setMessage(guessNumber + "より小さいです");
    } else {
      setMessage(count + "回でクリア! 答え:" + ansNumber);
    }
    countUp();

    e.preventDefault(); //デフォルトの動作をキャンセル(※今回はページ更新)
  };

  return (
    <div className="App">
      <h1>数字あてゲーム</h1>
      <h1>0~{MAX}までの数字を入力してね！</h1>
      <form onSubmit={handleSubmited}>
        <input onChange={handleGuessNumberChanged}></input>
        <input type="submit"></input>
      </form>
      <h2>{guessNumber}</h2>
      <h2>{message}</h2>
      {message.includes("クリア") && (
        <button
          onClick={() => {
            initialize();
          }}
        >
          もう一回
        </button>
      )}
    </div>
  );
};

export default GuessNumberGame;

// 必要な知識(基礎)
// 演算の優先順位
// 変数
// 関数
// if文,switch文
// 文字列連結

// react
// 関数コンポーネント
// ステート
// フック
// props
