import "./app.css";

// Component imports
import Chessboard from "./components/chessboard/Chessboard";

function App() {
  return (
    <main className="wrapper">
      <h1 className="sr-only">Chess: White goes first!</h1>

      <Chessboard />
    </main>
  );
}

export default App;
