import "./square.css";

function Square({ piece, color, coord }) {
  return (
    <div className={`square ${color}`} data-coord={coord}>
      {piece && <img src={piece.src} alt={piece.name} />}
    </div>
  );
}

export default Square;
