import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyApp from './components/MyApp'
import Name from './components/Name'
import ShoppingList from './components/ShoppingList'
import ProjectsPage2 from './components/ProjectsPage'
import { Greetings } from './components/Greetings';
import { Greeter } from './components/Greeter'
import { Greeter2 } from './components/Greeters2'
import { Empleado } from './components/Empleado'
import { Frutas } from './components/Frutas'
import Profile from './components/Avatar'

const empleado = {
  nombre: 'Natalia',
  edad: 28,
  salario: 200000,
  Email: 'Nat245@hotmail.com',
}

const frutas = ["fresa","mango","manzana"];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<MyApp />
      <Name />
      <ShoppingList />
      <ProjectsPage2 />*/}
      <Greetings name="hola ,saludo primer mensaje" />
      <Greetings name="trabajo fuertemente" />
      <Greetings name="tercer mensaje" />
      <Greeter first="Emily" last="Gonzalez" />
      <Greeter first="Hernando" last="Quintero" />
      <Greeter2  first="Julian" last={30} estado={false} />
      <Greeter2  first="Andres" last={25} estado={true} />
      <Greeter2  first="Mariana" last={15} estado={true} />
      <Empleado emple= { empleado}/>
      <Frutas fru = {frutas}/>
      <Profile/>
    </>
  )
}

export default App
