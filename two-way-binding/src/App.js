import { useState } from "react";

const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RBG Keyboard',
]

function App() {

  const [gift, setGift] = useState()

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }

  return (
    <div style={{ padding: 32 }}>
      <h1>{gift || 'Your gifts go here'}</h1>
      <button onClick={randomGift}>Generate</button>
    </div>
  )
}

export default App;