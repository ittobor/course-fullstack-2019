import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = props => <h1>anna palautetta</h1>
const Footer = props => <h1>statistiikka</h1>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Stat = ({text, value}) => (
    <>
      {text} {value}
    </>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const CountVotes = () => (good+neutral+bad)
  const SumVotes = () => (good-bad)
  const AvgVotes = () => (SumVotes()/CountVotes())
  const PosPropVotes = () => ( (good/CountVotes())*100)

  return (
    <div>
      <Header/>
      <Button handleClick={() => setGood(good + 1)} text='hyvä'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutraali'/>
      <Button handleClick={() => setBad(bad + 1)} text='huono'/>
      <Footer/>
      <Stat text='hyvä' value={good}/><br/>
      <Stat text='neutraali' value={neutral}/><br/>
      <Stat text='huono' value={bad}/><br/>
      <Stat text='yhteensä' value={CountVotes()}/><br/>
      <Stat text='keskiarvo' value={AvgVotes()}/><br/>
      <Stat text='positiivisia' value={PosPropVotes()}/>%<br/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
