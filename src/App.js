import "./App.css";
import GuessNumberGame from "./GuessNumberGame";
import JankenGame from "./JankenGame";

function App() {
  return (
    <div className="App">
      <h1>作成者：坂井 優紀</h1>
      <GuessNumberGame MAX={1000} />
      <JankenGame />
    </div>
  );
}

export default App;
