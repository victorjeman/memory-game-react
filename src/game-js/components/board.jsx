export const Board = ({ children }) => {
  return (
    <div className="board-container">
      <div className="board grid grid-cols-4 gap-4">{children}</div>
    </div>
  )
}
