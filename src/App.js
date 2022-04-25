import "./App.css";
import GuessNumberGame from "./GuessNumberGame";
import JankenGame from "./JankenGame";

function App() {
  return (
    <div className="App">
      <GuessNumberGame MAX={1000} />
      <JankenGame />
      <h1>作者：坂井 優紀</h1>
    </div>
  );
}

export default App;
