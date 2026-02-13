import FadeWrapper from "../components/FadeWrapper"
import { useGame } from "../state/GameContext"
import { useState } from "react"

const messages = [
  "You make normal days feel less normal.",
  "You somehow make chaos feel comfortable.",
  "And honestly… I like who I am around you."
]

export default function Stage3() {
  const { next } = useGame()
  const [index, setIndex] = useState(0)

  return (
    <FadeWrapper>
      <h2>You've unlocked a secret message from your favourite fan.</h2>

      <p>{messages[index]}</p>

      {index < messages.length - 1 ? (
        <button onClick={() => setIndex(index + 1)}>Next</button>
      ) : (
        <button onClick={() => next("stage4")}>Continue</button>
      )}
    </FadeWrapper>
  )
}
