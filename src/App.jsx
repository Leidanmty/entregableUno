import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import quotes from './quotes.json'
import QuoteBox from './commponents/QuoteBox'

const colors = [
  "#845EC2",
  "#D65DB1",
  "#FF6F91",
  "#FF9671",
  "#FFC75F",
  "#F9F871"
];

function App() {
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex];
  // @ts-ignore
  document.body.style = `background: ${color}`;
  

  return (
    <div className="App">
      <QuoteBox textcolor={color}/>
    </div>
  )
}

export default App
