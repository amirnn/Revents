import { useState } from 'react'
import { Button } from 'semantic-ui-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Hello World</h1>
      <Button primary> First Button </Button>
      <Button secondary> Second Button </Button>

    </div>
  )
}

export default App
