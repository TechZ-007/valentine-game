import FadeWrapper from "../components/FadeWrapper"
import { useGame } from "../state/GameContext"
import ShakyButton from "../components/ShakyButton"

export default function Stage4() {
  const { next, addYes } = useGame()

  const yes = () => {
    addYes()
    next("celebration")
  }

  return (
    <FadeWrapper>
      <p>
        the most important question of the day that i've been meaning to ask the girl of my dreams
      </p>
      <p>to just you and always you</p>

      <h2>Will you be my Valentine Bhumika Rawat</h2>

      <div className="btn-row">
        <button onClick={yes}>Yes ❤️</button>
        <ShakyButton>No</ShakyButton>
      </div>
    </FadeWrapper>
  )
}
