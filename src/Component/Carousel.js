import React from "react";
import { Carousel } from "react-bootstrap";
import '../App.css';

class ChangeImage extends React.Component {
  constructor() {
    super();

    this.state = {
      currIdx: 0,
      
      imgArr1:[
        "images/tajmahal/taj1.jpg",
        "images/tajmahal/taj2.jpg",
        "images/tajmahal/taj3.jpg",
      ],
      imgArr2: [
        "images/mumbai/mumbai1.jpg",
        "images/mumbai/mumbai2.jpg",
        "images/mumbai/mumbai3.jpg",
      ],
      imgArr3:[
        "images/leh/leh1.jpg",
        "images/leh/leh2.jpg",
        "images/leh/leh3.jpg",
      ]
    };
  }


  render() {
    return (
      this.props.num==1?
      <>
        <Carousel interval={2000} >
          <Carousel.Item style={{height:"200px"}}>
            <img
              className="b-block w-100"
              src={this.state.imgArr1[0]}
              alt="First slide"
              
            />
          </Carousel.Item >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={this.state.imgArr1[1]}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={this.state.imgArr1[2]}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </>: this.props.num==2 ?
      <>
      <Carousel interval={2000} >
          <Carousel.Item>
            <img
              className="b-block w-100"
              src={this.state.imgArr2[0]}
              alt="First slide"
              
            />
          </Carousel.Item >
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={this.state.imgArr2[1]}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={this.state.imgArr2[2]}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </>:
       <>
       <Carousel interval={2000} >
           <Carousel.Item>
             <img
               className="b-block w-100"
               src={this.state.imgArr3[0]}
               alt="First slide"
               
             />
           </Carousel.Item >
           <Carousel.Item >
             <img
               className="d-block w-100"
               src={this.state.imgArr3[1]}
               alt="Second slide"
             />
           </Carousel.Item>
           <Carousel.Item >
             <img
               className="d-block w-100"
               src={this.state.imgArr3[2]}
               alt="Third slide"
             />
           </Carousel.Item>
         </Carousel>
       </>
    );
  }
}

export default ChangeImage;
