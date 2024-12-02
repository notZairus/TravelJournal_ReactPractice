import { useState } from 'react'
import Header from '/src/components/Header'
import CardContainer from './components/CardContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <CardContainer />
    </>
  )
}

export default App
