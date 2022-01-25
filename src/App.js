import './App.css'
import User from './components/user/User'
import Card from './components/card/Card'
import data from './data.json'
import './components/card/Card.css'
import { useState } from 'react'


function App() {

  const [monState, setMonState] = useState("weekly")

  const daily = () => {
    setMonState("daily")
  }

  const weekly = () => {
    setMonState("weekly")
  }

  const monthly = () => {
    setMonState("monthly")
  }

  const couleur = ["bg-light", "bg-softBlue", "bg-lightRed", "bg-limeGreen", "bg-violet", "bg-softOrange"]

  const hover = ["nbrHeuresWork", "nbrHeuresPlay", "nbrHeuresStudy" , "nbrHeuresExercices",  "nbrHeuresSocial", "nbrHeuresSelf"]

  return (
    <div className="App">

        <div className="toutecard">
           <User daily={daily} weekly={weekly} monthly={monthly} />
          <div className="allCards">
          <div className="raw1">
            {data.slice(0, 3).map((data) => (<Card titre={data.title} heure={data.timeframes[monState].current} heure2={data.timeframes[monState].previous} bgcolor={couleur[data.id - 1]} svg={data.id - 1} hover={hover[data.id - 1]} />))}
          </div>
          <div className="raw2">
            {data.slice(3, 6).map((data) => (<Card titre={data.title} heure={data.timeframes[monState].current} heure2={data.timeframes[monState].previous} bgcolor={couleur[data.id - 1]} svg={data.id - 1} hover={hover[data.id - 1]} />))}
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default App;
