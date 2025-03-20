const Badge =()=>{


    

    return(
        
        <button type="button" class="btn btn-primary position-relative">
        Buzon
        <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span class="visually-hidden">New alerts</span>
        </span>
      </button>
    )
} 
export default Badge