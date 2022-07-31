import React from "react";
import { Carousel } from "react-bootstrap";
import './App.css';

class ChangeImage extends React.Component {
  constructor() {
    super();

    this.state = {
      currIdx: 0,
      imgArr: [
        "images/nature0.jpg",
        "images/nature3.jpg",
        "images/nature2.jpg",
        "images/nature3.jpg",
      ],
    };
  }


  render() {
    return (
      <>
        <Carousel interval={2000} style={{width:"75%",marginLeft:'170px'}}>
          <Carousel.Item style={{height:"450px"}}>
            <img
              className="b-block w-100"
              src={this.state.imgArr[0]}
              alt="First slide"
              height={"450px"}
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item >
          <Carousel.Item style={{height:"450px"}}>
            <img
              className="d-block w-100"
              src={this.state.imgArr[1]}
              alt="Second slide"
              height={"450px"}
            />

            {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item style={{height:"450px"}}>
            <img
              className="d-block w-100"
              src={this.state.imgArr[2]}
              alt="Third slide"
              height={"450px"}
            />

            {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default ChangeImage;
