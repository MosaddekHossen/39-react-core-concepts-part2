import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('Button clicked!')
  }

  const handleClick2 = () => {
    alert('Button click2!')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('Third click!') }}>Third</button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
