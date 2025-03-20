import './Boton.css';
const Boton =({titulo})=>{

    const estilo={
        boton:{
            backgraundColor: 'black'
        }
    }

    return(
        
        <button type="button" className='boton' style={estilo.boton}>
        {titulo}
        </button>
       
     
      

    )
} 
export default Boton