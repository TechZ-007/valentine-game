import FadeWrapper from "../components/FadeWrapper"
import { useGame } from "../state/GameContext"

export default function Stage1() {
  const { next, addYes } = useGame()

  const yes = () => {
    addYes()
    next("stage2")
  }

  const no = () => {
    alert("suspicious response detected. please try again")
  }

  return (
    <FadeWrapper>
      <h2>Do you like spending time with me?</h2>
      <div className="btn-row">
        <button onClick={yes}>Yes 😊</button>
        <button onClick={no}>No 🤨</button>
      </div>
    </FadeWrapper>
  )
}
