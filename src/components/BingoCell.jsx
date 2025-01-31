import PropTypes from "prop-types";

export function BingoCell({ content, isFree, isMarked, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        aspect-square p-1 border-2 border-yellow-400
        flex items-center justify-center text-center
        transition-colors duration-200
        ${isMarked ? "bg-red-600/80" : "bg-gray-900"}
        ${isFree ? "relative overflow-hidden" : ""}
        hover:bg-red-600/60
      `}
    >
      {isFree ? (
        <div className="transform xs:transform xs:-rotate-45 md:rotate-45 bg-red-600 text-white px-8 py-1 text-sm font-bold uppercase">{content}</div>
      ) : (
        <span className="xs:text-[8px] xs:transform xs:-rotate-45 md:rotate-0 text-white font-bold text-xs sm:text-sm uppercase">{content}</span>
      )}
    </button>
  )
}

BingoCell.propTypes = {
  content: PropTypes.string.isRequired,
  isFree: PropTypes.bool.isRequired,
  isMarked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
