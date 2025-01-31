import { useState, useEffect } from "react"
import { BingoRow } from "../molecules/BingoRow"
import { BANDS } from "../../constants/bands"

const bingoItems = BANDS;

export function BingoGrid() {
  const [markedCells, setMarkedCells] = useState([]);

  useEffect(() => {
    setMarkedCells(new Array(bingoItems.length).fill(false));
  }, []);

  const handleCellClick = (index) => {
    setMarkedCells((prev) => {
      const newMarked = [...prev]
      newMarked[index] = !newMarked[index]
      return newMarked
    })
  }

  const rows = []
  for (let i = 0; i < 5; i++) {
    rows.push(bingoItems.slice(i * 5, (i + 1) * 5))
  }

  return (
    <div className="grid gap-1">
      {rows.map((cells, rowIndex) => (
        <BingoRow
          key={rowIndex}
          cells={cells}
          rowIndex={rowIndex}
          markedCells={markedCells}
          onCellClick={handleCellClick}
        />
      ))}
    </div>
  )
}