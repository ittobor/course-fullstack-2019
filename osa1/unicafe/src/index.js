import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const CountVotes = (good, neutral, bad) => (good+neutral+bad)
const SumVotes = (good, neutral, bad) => ((1*good)+(0*neutral)+(-1*bad))
const AvgVotes = (good, neutral, bad) => (SumVotes(good, neutral, bad)/CountVotes(good, neutral, bad))
const PosPropVotes = (good, neutral, bad) => (((good/CountVotes(good, neutral, bad))*100)+'%')

const Header = props => <h1>anna palautetta</h1>
const Footer = props => <h1>statistiikka</h1>

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Statistics = (props) => {
  if (CountVotes(props.good,props.neutral,props.bad) === 0) {
    return (
      <p>Ei yhtään palautetta annettu.</p>
    )

  }

  return (
  <table>
    <tbody>
      <Statistic text='hyvä' value={props.good}/>
      <Statistic text='neutraali' value={props.neutral}/>
      <Statistic text='huono' value={props.bad}/>
      <Statistic text='yhteensä' value={CountVotes(props.good,props.neutral,props.bad)}/>
      <Statistic text='keskiarvo' value={AvgVotes(props.good,props.neutral,props.bad)}/>
      <Statistic text='positiivisia' value={PosPropVotes(props.good,props.neutral,props.bad)}/>
    </tbody>
  </table>
)}

const Statistic = ({text, value}) => (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header/>
      <Button handleClick={() => setGood(good + 1)} text='hyvä'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutraali'/>
      <Button handleClick={() => setBad(bad + 1)} text='huono'/>
      <Footer/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
