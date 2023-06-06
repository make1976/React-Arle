import { useState } from 'react'
import './App.css'
import { FirstApp } from './components/FirstApp'
import List from './components/List'
import Listropa from './components/Ropa';
import Recetas from './components/Recetas';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <List />
      <FirstApp title="Hola Mary" subTitle={77} subTitle2="La mas brillante" />
      <Listropa/>
      <Recetas/>
    </>
  )
}

export default App
