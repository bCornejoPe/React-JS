import './App.css'
import Boton from './components/Boton'
import Alert from './components/Alert'
import Acordeon from './components/Acordeon'
import Badge from './components/Badge'
import Carrusel from './components/Carrusel'
import Progress from './components/Progress'
import Toast from './components/Toast'
import Example from './components/Example'
import ColorPicket from './components/Colopiket'
import MultipleMenu from './components/MultipleMenu'
import Deslizable from './components/Deslizable'
import Indeterminate from './components/IndeterminatedCheked'
import CheckButon from './components/ChekoxButton'
import RangeOverview from './components/RangeOver'
import Wraping from './components/Wraping'
import MultiV from './components/MultipleImputs'
import ButoGrup from './components/ButtonGrup'


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
      <br/>

      <Example/>
      <br/>

      <ColorPicket/>
      <br/>

      <MultipleMenu/> 
      <br/>

      <Deslizable/>
      <br/>

      <Indeterminate/>
      <br/>

      <CheckButon/>
      <br/>

      <RangeOverview/>
      <br/>

      <Wraping/>
      <br/>

      <MultiV/>
      <br/>

  <ButoGrup/>
    
    </>
  )
}

export default App
