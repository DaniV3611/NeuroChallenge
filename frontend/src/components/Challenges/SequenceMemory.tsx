import { useState, useCallback, useEffect } from "react";
import { Button } from "../ui/button";

const SequenceMemory = () => {
  const [gameState, setGameState] = useState<"idle" | "playing" | "finished">(
    "idle"
  );

  const generateNumber = () => {
    return Math.floor(Math.random() * 9) + 1;
  };
  const activateCell = (cellId: number) => {
    handleCellClick(cellId);
  };
  useEffect(() => {
    if (gameState === "playing") {
      setTimeout(() => {
        const number = generateNumber();
        activateCell(number);
      }, 1000); // Wait 1 second to start
    }
  }, [gameState]);

  // 9 cells in a 3x3 grid
  const [cells, setCells] = useState([
    {
      id: 1,
      value: 1,
      isActive: false,
    },
    {
      id: 2,
      value: 2,
      isActive: false,
    },
    {
      id: 3,
      value: 3,
      isActive: false,
    },
    {
      id: 4,
      value: 4,
      isActive: false,
    },
    {
      id: 5,
      value: 5,
      isActive: false,
    },
    {
      id: 6,
      value: 6,
      isActive: false,
    },
    {
      id: 7,
      value: 7,
      isActive: false,
    },
    {
      id: 8,
      value: 8,
      isActive: false,
    },
    {
      id: 9,
      value: 9,
      isActive: false,
    },
  ]);

  const setCellState = useCallback((cellId: number, isActive: boolean) => {
    setCells((prevCells) =>
      prevCells.map((cell) =>
        cell.id === cellId ? { ...cell, isActive } : cell
      )
    );
  }, []);

  const handleCellClick = useCallback(
    (cellId: number) => {
      // Activar la celda
      setCellState(cellId, true);

      // Desactivar la celda después de 500ms
      const timeoutId = setTimeout(() => {
        setCellState(cellId, false);
      }, 400);

      // Limpiar el timeout si el componente se desmonta o se hace clic en otra celda
      return () => clearTimeout(timeoutId);
    },
    [setCellState]
  );

  if (gameState === "idle") {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <Button className="" onClick={() => setGameState("playing")}>
          Start the Game
        </Button>
      </div>
    );
  } else if (gameState === "playing") {
    return (
      <div className="w-full h-full flex flex-wrap">
        {cells.map((cell) => (
          <div
            key={cell.id}
            className="w-1/3 h-1/3 p-2 cursor-pointer"
            onClick={() => handleCellClick(cell.id)}
          >
            <div
              className={`w-full h-full flex items-center justify-center ${
                cell.isActive ? "bg-gray-800" : "bg-gray-800/40"
              } rounded-xl shadow-lg transition-colors duration-200`}
            ></div>
          </div>
        ))}
      </div>
    );
  } else if (gameState === "finished") {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Finished</h1>
      </div>
    );
  }

  return <></>;
};

export default SequenceMemory;
