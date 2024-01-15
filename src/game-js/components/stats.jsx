import { useEffect, useState } from 'react'

export const Stats = ({ moves, gameStarted }) => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (gameStarted === false || timer !== 0) return

    const interval = setInterval(() => {
      setTimer((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [gameStarted, timer])

  return (
    <div className="stats">
      <div className="moves">{moves} moves</div>
      <div className="timer">timer: {timer} sec</div>
    </div>
  )
}
