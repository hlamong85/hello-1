import { Carousel } from "react-bootstrap";
import banner1 from '../../images/banner/banner1.jpg'        
import banner2 from '../../images/banner/banner2.jpg'        
import banner3 from '../../images/banner/banner3.jpg' 
import './Banner.css'       

const Banner = () => {
    return (
        <>
         <div className="banner">
         <Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
     <div  id ="carousel">
     <h1>Senior Consultant</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
     <div  id ="carousel">
     <h1>Surgery Department</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <div id="carousel">
      <h1>Women Specialize</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
         </div>
        </>
    );
};

export default Banner;