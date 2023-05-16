import { useState } from "react"
import { Banner } from "./components/Banner"
import { Form } from "./components/Form"
import { Squad } from "./components/Squad"

function App() { 
  const squads = [
    {
      squadName: "Valorant",
      primaryColor: "#57c278",
      secondColor: "#d9f7e9",
    },
    {
      squadName: "Counter-Strike 2",
      primaryColor: "#02cffa",
      secondColor: "#e8f8ff",
    },
    {
      squadName: "League of Legends",
      primaryColor: "#a6d157",
      secondColor: "#f0f8e2",
    },
    {
      squadName: "Fortnite",
      primaryColor: "#ed6b69",
      secondColor: "#fde7e8",
    },
    {
      squadName: "Tom Clancy's Rainbow Six Siege",
      primaryColor: "#d863bf",
      secondColor: "#fae9f5",
    },
  ]


  const [player, setPlayer] = useState([])

  function handleNewPlayer(playerData) {
    setPlayer([...player, playerData])
  }

  console.log(player)

  return (
    <>
      <Banner />
      <Form squadList={squads.map(squad => squad.squadName)} handleSubmit={playerData => handleNewPlayer(playerData)} />
      {squads.map(squad => {
        return (
          <Squad 
            key={squad.squadName} 
            squadName={squad.squadName}
            primaryColor={squad.primaryColor}
            secondColor={squad.secondColor}
            squad={squads.map(squad => squad.squadName)}
            players={player.filter(player => player.squad === squad.squadName)}
          />
        )  
      })}
    </>
  ) 
}

export default App
