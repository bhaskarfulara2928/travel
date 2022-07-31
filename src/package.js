
import './App.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/HeaderFooter/footer'

function Package() {
    return (
        <div className="Header">
            <div className="heading" style={{background:"url(images/header-bg-2.jpg) no-repeat"}}>
            <h1 style={{marginBottom:"20px"}}>packages</h1>
                
            </div>

            {/* <!-- packages section starts  --> */}

            <section className="packages">

                <h1 className="heading-title" style={{color:'black'}}>top destinations</h1>

                <div className="box-container">

                    <div className="box">
                        <div className="image">
                            <img src="images/img-1.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-2.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-3.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-4.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-5.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-6.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-7.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-8.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-9.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-10.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-11.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src="images/img-12.jpg" alt=""/>
                        </div>
                        <div className="content">
                            <h3>adventure & tour</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, perspiciatis!</p>
                            <NavLink to={'/book'} className="btnClass">Book Now</NavLink>
                        </div>
                    </div>

                </div>

                <div className="load-more"><span className="btnClass">load more</span></div>

            </section>

            <Footer/>

        </div>
    );
}

export default Package;