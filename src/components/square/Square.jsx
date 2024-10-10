import "./square.css";

function Square({ piece, color, coord }) {
  const is1stRank = coord[1] === "1";
  const isHFile = coord[0] === "h";

  return (
    <div className={`square ${color}`} data-coord={coord}>
      {is1stRank && <span className="coord-label rank-label">{coord[0]}</span>}
      {isHFile && <span className="coord-label file-label">{coord[1]}</span>}
      {piece && <img src={piece.src} alt={piece.name} />}
    </div>
  );
}

export default Square;
