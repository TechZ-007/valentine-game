import { AnimatePresence } from "framer-motion"
import { GameProvider, useGame } from "./state/GameContext"

import Intro from "./stages/Intro"
import Stage1 from "./stages/Stage1"
import Stage2 from "./stages/Stage2"
import Stage3 from "./stages/Stage3"
import Stage4 from "./stages/Stage4"
import Celebration from "./stages/Celebration"
import CursorTrail from "./components/CursorTrail"

function StageRouter() {
  const { stage } = useGame()

  return (
    <AnimatePresence mode="wait">
      {stage === "intro" && <Intro key="intro" />}
      {stage === "stage1" && <Stage1 key="s1" />}
      {stage === "stage2" && <Stage2 key="s2" />}
      {stage === "stage3" && <Stage3 key="s3" />}
      {stage === "stage4" && <Stage4 key="s4" />}
      {stage === "celebration" && <Celebration key="c" />}
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <GameProvider>
      <CursorTrail />
      <StageRouter />
    </GameProvider>
  )
}
