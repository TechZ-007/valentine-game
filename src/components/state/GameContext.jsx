import { createContext, useContext, useState } from "react"

const GameContext = createContext()

export const GameProvider = ({ children }) => {
  const [stage, setStage] = useState("intro")
  const [yesCount, setYesCount] = useState(0)

  const next = (nextStage) => setStage(nextStage)
  const addYes = () => setYesCount(v => v + 1)

  return (
    <GameContext.Provider value={{ stage, next, yesCount, addYes }}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)
