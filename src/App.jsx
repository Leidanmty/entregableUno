import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './commponents/QuoteBox'

const colors = [
  "#ffc4f3",
  "#087ec4",
  "#26ffbd",
  "#9e5945",
  "#ffe955",
  "#ba1300",
  "#8e73ff"
];

function App() {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];
  // @ts-ignore
  document.body.style = `background: ${color}`;

  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random);
  

  return (
    <div className="App">
      <QuoteBox textcolor={color} phrase={quotes[index].quote} author={quotes[index].author}/>
    </div>
  )
}

export default App
