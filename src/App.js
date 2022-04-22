import "./App.css";
import GuessNumberGame from "./GuessNumberGame";
import JankenGame from "./JankenGame";

function App() {
  return (
    <div className="App">
      <GuessNumberGame MAX={1000} />
      <JankenGame />
    </div>
  );
}

export default App;
