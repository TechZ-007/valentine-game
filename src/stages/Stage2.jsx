import FadeWrapper from "../components/FadeWrapper"
import { useGame } from "../state/GameContext"
import { useState } from "react"

export default function Stage2() {
  const { next, addYes } = useGame()
  const [pos, setPos] = useState({ x: 50, y: 50 })

  const move = () => {
    setPos({
      x: Math.random() * 80,
      y: Math.random() * 80
    })
  }

  const win = () => {
    addYes()
    next("stage3")
  }

  return (
    <FadeWrapper>
      <h2>Catch the Yes 👀</h2>

      <button
        onMouseEnter={move}
        onClick={win}
        style={{
          position: "absolute",
          left: pos.x + "%",
          top: pos.y + "%"
        }}
      >
        YES ❤️
      </button>
    </FadeWrapper>
  )
}
