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
      <p>{text} {value}</p>
    </>
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
      <Stat text='hyvä' value={good}/>
      <Stat text='neutraali' value={neutral}/>
      <Stat text='huono' value={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
