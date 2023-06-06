import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from 'react-bootstrap'
import Button1 from './Button1'
import Toolbar from './toolbar'
import Signup from './Signup'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
      <Button1 />
      <Button />
      <Toolbar
        onPlayMovie={() => alert('La pelicula se va a reproducir')}
        onUploadImage={() => alert('la imagen se va a cargar!')}
      />
      <Signup />

    </>
  )
}

export default App
