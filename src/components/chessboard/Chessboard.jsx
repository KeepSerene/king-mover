import "./chessboard.css";

// Component imports
import Square from "../square/Square";

function Chessboard() {
  const rankCoords = ["a", "b", "c", "d", "e", "f", "g", "h"]; // Rows
  const fileCoords = [8, 7, 6, 5, 4, 3, 2, 1]; // Columns

  const pieces = {
    k: {
      type: "king",
      white: { name: "white king", src: "/images/king_w.png" },
      black: { name: "black king", src: "/images/king_b.png" },
    },

    q: {
      type: "queen",
      white: { name: "white queen", src: "/images/queen_w.png" },
      black: { name: "black queen", src: "/images/queen_b.png" },
    },

    r: {
      type: "rook",
      white: { name: "white rook", src: "/images/rook_w.png" },
      black: { name: "black rook", src: "/images/rook_b.png" },
    },

    b: {
      type: "bishop",
      white: { name: "white bishop", src: "/images/bishop_w.png" },
      black: { name: "black bishop", src: "/images/bishop_b.png" },
    },

    n: {
      type: "knight",
      white: { name: "white knight", src: "/images/knight_w.png" },
      black: { name: "black knight", src: "/images/knight_b.png" },
    },

    p: {
      type: "pawn",
      white: { name: "white pawn", src: "/images/pawn_w.png" },
      black: { name: "black pawn", src: "/images/pawn_b.png" },
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
