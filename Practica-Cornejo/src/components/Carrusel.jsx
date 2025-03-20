const Carrusel =()=>{


    

    return(
        
        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://th.bing.com/th/id/OIP.Jo0KeJwCz6lubegDtLS16gHaHK?w=183&h=180&c=7&r=0&o=5&pid=1.7" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://th.bing.com/th/id/OIP.6r9elK-eaGiyQ2au7xNi4AHaId?rs=1&pid=ImgDetMain" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://pm1.narvii.com/6226/48504aae0ac7d140aac4d36d42e70deb6cdc8285_hq.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    )
} 
export default Carrusel