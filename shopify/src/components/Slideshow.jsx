import React from 'react';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Slideshow() {
  return (
    <>
    
      {/* Images on the right */}
      <div className="content">
        <div className="slideshow">
          <img
            src="/public/images/images3.jpg"
            alt="Slideshow Image"
            style={{ width: 'auto', height: '500px' }} // Adjust width and height as needed
          />
        </div>
        <br />
        <h2 className="justify center text-center">Categories to Choose From</h2>
        <div className="slideshow">
          <img
            src="/public/images/images4.jpeg"
            alt="Slideshow Image"
            style={{ width: 'auto', height: '500px' }} // Adjust width and height as needed
          />
        </div>
      </div>
      </>
  );
}

export default Slideshow;






// import React from 'react'


// function Slideshow() {
//   return (
//     <div className='slideshow'>
//     <div id="carouselExampleIndicators" class="carousel slide">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img src="./shopify/src/images/images3.jpg" class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..."/>
//     </div>
//     <div class="carousel-item">
//       <img src="..." class="d-block w-100" alt="..."/>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

//     </div>
//   )
// }

// export default Slideshow

