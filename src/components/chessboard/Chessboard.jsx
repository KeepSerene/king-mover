import "./chessboard.css";

// Component imports
import Square from "../square/Square";

// Helper function imports
import { getCharFromCode } from "../../utils";

function Chessboard() {
  const rankCoords = Array(8)
    .fill()
    .map((_, index) => getCharFromCode(index)); // Row coordinates
  const fileCoords = Array(8)
    .fill()
    .map((_, index) => 8 - index); // Column coordinates

  const pieces = {
    k: {
      type: "king",
      white: { name: "white king", src: "/images/wk.png" },
      black: { name: "black king", src: "/images/bk.png" },
    },

    q: {
      type: "queen",
      white: { name: "white queen", src: "/images/wq.png" },
      black: { name: "black queen", src: "/images/bq.png" },
    },

    r: {
      type: "rook",
      white: { name: "white rook", src: "/images/wr.png" },
      black: { name: "black rook", src: "/images/br.png" },
    },

    b: {
      type: "bishop",
      white: { name: "white bishop", src: "/images/wb.png" },
      black: { name: "black bishop", src: "/images/bb.png" },
    },

    n: {
      type: "knight",
      white: { name: "white knight", src: "/images/wn.png" },
      black: { name: "black knight", src: "/images/bn.png" },
    },

    p: {
      type: "pawn",
      white: { name: "white pawn", src: "/images/wp.png" },
      black: { name: "black pawn", src: "/images/bp.png" },
    },
  };

  // FEN-like notations
  const initialBoardState = [
    ["r", "n", "b", "q", "k", "b", "n", "r"], // 8th rank
    ["p", "p", "p", "p", "p", "p", "p", "p"], // 7th rank
    Array(8).fill(null), // 6th rank
    Array(8).fill(null), // 5th rank
    Array(8).fill(null), // 4th rank
    Array(8).fill(null), // 3rd rank
    ["P", "P", "P", "P", "P", "P", "P", "P"], // 2nd rank
    ["R", "N", "B", "Q", "K", "B", "N", "R"], // 1st rank
  ];

  const getPieceFromNotation = (notation) => {
    if (!notation) return null;

    const isWhite = notation === notation.toUpperCase();
    const pieceKey = notation.toLowerCase();

    return pieces[pieceKey]?.[isWhite ? "white" : "black"] || null;
  };

  const renderBoard = () => {
    return initialBoardState.map((rank, rankIndex) =>
      rank.map((piece, fileIndex) => {
        const coord = `${rankCoords[fileIndex]}${fileCoords[rankIndex]}`;
        const color = (rankIndex + fileIndex) % 2 === 0 ? "light" : "dark";

        return (
          <Square
            key={coord}
            piece={getPieceFromNotation(piece)}
            color={color}
            coord={coord}
          />
        );
      })
    );
  };

  return <div className="chessboard">{renderBoard()}</div>;
}

export default Chessboard;
