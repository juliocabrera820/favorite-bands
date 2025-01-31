import { BingoGrid } from "../organisms/BingoGrid"

export function BingoCard() {
  return (
    <div className="relative max-w-2xl mx-auto p-4">
      <div className="text-center mb-3">
        <h1 className="text-8xl font-bold text-yellow-400 tracking-widest font-stencil xs:pl-4">BINGO</h1>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg">
        <BingoGrid />
      </div>
    </div>
  )
}
