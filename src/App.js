import "./App.css";
import GuessNumberGame from "./GuessNumberGame";
import JankenGame from "./JankenGame";

function App() {
  return (
    <div className="App">
      <GuessNumberGame MAX={1000} />
      <JankenGame />
      <h3>作者：坂井 優紀</h3>
    </div>
  );
}

export default App;
