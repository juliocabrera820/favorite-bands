import PropTypes from "prop-types"
import { BingoCell } from "../atoms/BingoCell"

export function BingoRow({ cells, rowIndex, markedCells, onCellClick }) {
  return (
    <div className="grid grid-cols-5 gap-1">
      {cells.map(({ name, isFree }, colIndex) => {
        const cellIndex = rowIndex * 5 + colIndex

        return (
          <BingoCell
            key={cellIndex}
            content={name}
            isFree={isFree}
            isMarked={markedCells[cellIndex]}
            onClick={() => onCellClick(cellIndex)}
          />
        )
      })}
    </div>
  )
}

BingoRow.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    isFree: PropTypes.bool.isRequired,
  })).isRequired,
  rowIndex: PropTypes.number.isRequired,
  markedCells: PropTypes.arrayOf(PropTypes.bool).isRequired,
  onCellClick: PropTypes.func.isRequired,
}