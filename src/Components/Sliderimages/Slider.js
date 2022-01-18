import React from 'react'
import { Carousel } from 'react-bootstrap'
 const Slider = () => {
    return (
        <div>
           <Carousel style={{height:"200px",width:"100%"}} fade variant="dark" >
  <Carousel.Item>
    <img
      className="d-block w-0"
      src="logo512.png"
      alt="First slide"
      style={{width:"10%"}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
      src="logo512.png"
      alt="Second slide"
      style={{width:"10%"}}
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-40"
      src="logo512.png"
      alt="Third slide"
      style={{width:"10%"}}
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    )
}
export default Slider