import FadeWrapper from "../components/FadeWrapper"
import { useGame } from "../state/GameContext"

export default function Intro() {
  const { next } = useGame()

  return (
    <FadeWrapper>
      <h1>⚠ Secret Level Unlocked</h1>
      <p>Player 2 authentication required</p>
      <button onClick={() => next("stage1")}>Start</button>
    </FadeWrapper>
  )
}
