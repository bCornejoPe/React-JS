import './App.css'
import Boton from './components/Boton'
import Alert from './components/Alert'
import Acordeon from './components/Acordeon'
import Badge from './components/Badge'
import Carrusel from './components/Carrusel'
import Progress from './components/Progress'
import Toast from './components/Toast'

function App() {
  

  return (
    <>
      <h1>Hola Mundo</h1>
     <Boton
     titulo={'Boton 1'}/>

     <br />
     <Alert
     enlace= {'https://g.co/kgs/aF6UeAB'}
     texto={'Champions'}
     />
     <br/>

     <Acordeon/>
     <br/>

      <Badge/>
      <br/>

      <Carrusel/>
      <br/>

      <Progress/>
      <br/>

      <Toast/>

    
    </>
  )
}

export default App
