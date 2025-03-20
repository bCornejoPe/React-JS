const Alert =({enlace, texto})=>{


    

    return(
        
        <div class="alert alert-primary" role="alert">
       Alertaaaaa <a href={enlace} class="alert-link">{texto}</a>.Cuidado
      </div>
    )
} 
export default Alert