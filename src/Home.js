import './App.css';
import React,{useState} from 'react';
import Footer from './Component/HeaderFooter/footer'
import ChangeImage from './ChangeImage';
import { NavLink } from 'react-router-dom';
import Accordion from './Component/Acoordian/Accordian';
import Carousel from './Component/Carousel'

function Home() {
  
  
  return (
    <div className="Home">

      <div className='backCarousel'><ChangeImage/></div>
      <section className="services" >
        <h1 className="heading-title" style={{color:'black'}}> our services </h1>
        <div className="box-container">
          <div className="box">
            <img src="./images/icon-1.png" alt="" />
            <h3>adventure</h3>
          </div>
          <div className="box">
            <img src="../images/icon-2.png" alt="" />
            <h3>tour guide</h3>
          </div>

          <div className="box">
            <img src="../images/icon-3.png" alt="" />
            <h3>trekking</h3>
          </div>

          <div className="box">
            <img src="../images/icon-4.png" alt="" />
            <h3>camp fire</h3>
          </div>

          <div className="box">
            <img src="../images/icon-5.png" alt="" />
            <h3>off road</h3>
          </div>

          <div className="box">
            <img src="../images/icon-6.png" alt="" />
            <h3>camping</h3>
          </div>

        </div>

      </section>

      {/* services section ends*/}

      {/*home about section starts*/}

      <section className="home-about">

        <div className="image">
          <img src="../images/about-img.jpg" alt="" />
        
        </div>

        <div className="content">
          <h3>about us</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita et, recusandae nobis fugit modi quibusdam ea assumenda, nulla quisquam repellat rem aliquid sequi maxime sapiente autem ipsum? Nobis, provident voluptate?</p>
          <NavLink to={'/about'} className="btnClass" style={{textDecoration:"None"}}>read more</NavLink>
        </div>

      </section>

      {/*home about section ends */}

      {/*home packages section starts*/}

      <section className="home-packages">

        <h1 className="heading-title" style={{color:'black'}}> our packages </h1>

        <div className="box-container">

          <div className="box">
            <div className="image">
              {/* <img src="../images/img-1.jpg" alt="" /> */}
              <Carousel num={1}/>
            </div>
            <div className="content">
              <h3>Delhi And Agra</h3>
              <Accordion accor={1}/>
              <NavLink to={'/book'} className="btnClass" style={{textDecoration:"None"}}>Book Now</NavLink>
              
            </div>
          </div>

          <div className="box">
            <div className="image">
              {/* <img src="../images/img-2.jpg" alt="" /> */}
              <Carousel num={2}/>
            </div>
            <div className="content">
              <h3>Mumbai Darashan</h3>
              <Accordion accor={2}/>
              <NavLink to={'/book'} className="btnClass" style={{textDecoration:"None"}}>Book Now</NavLink>
            </div>
          </div>

          <div className="box">
            <div className="image">
              {/* <img src="../images/img-3.jpg" alt="" /> */}
              <Carousel/>
            </div>
            <div className="content">
              <h3>Leh And Ladakh</h3>
              <Accordion accor={3}/>
              <NavLink to={'/book'} className="btnClass" style={{textDecoration:"None"}}>Book Now</NavLink>
            </div>
          </div>

        </div>

        <div className="load-more"><NavLink to={'/package'} className="btnClass" style={{textDecoration:"None"}}>Load More</NavLink>  </div>

      </section>

      {/* home packages section ends*/}

      {/*home offer section starts*/}

      <section className="home-offer">
        <div className="content">
          <h3>upto 50% off</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure tempora assumenda, debitis aliquid nesciunt maiores quas! Magni cumque quaerat saepe!</p>
          <NavLink to={'#'} className="btnClass" style={{textDecoration:"None"}}>Book Now</NavLink>
        </div>
      </section>

      {/* home offer section ends */}
      <Footer/>
    </div>
  );
}

export default Home;