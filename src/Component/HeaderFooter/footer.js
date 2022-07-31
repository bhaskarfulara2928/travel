import '../../App.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function footer() {
    return (
        <div className="Header">
            <section class="footer" style={{background: "url(./images/footer-bg.jpg) no-repeat"}}>

                <div class="box-container">

                    <div class="box">
                        <h3>quick links</h3>
                        <a style={{textDecoration:"none"}} href="/"> <i class="fas fa-angle-right"></i> home</a>
                        <a style={{textDecoration:"none"}} href="/about"> <i class="fas fa-angle-right"></i> about</a>
                        <a style={{textDecoration:"none"}} href="/package"> <i class="fas fa-angle-right"></i> package</a>
                        <a style={{textDecoration:"none"}} href="/book"> <i class="fas fa-angle-right"></i> book</a>
                    </div>

                    <div class="box">
                        <h3>extra links</h3>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-angle-right"></i> ask questions</a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-angle-right"></i> about us</a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-angle-right"></i> privacy policy</a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-angle-right"></i> terms of use</a>
                    </div>

                    <div class="box">
                        <h3>contact info</h3>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-phone"></i> +123-456-7890 </a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-phone"></i> +111-222-3333 </a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-envelope"></i> shaikhanas@gmail.com </a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fas fa-map"></i> mumbai, india - 400104 </a>
                    </div>

                    <div class="box">
                        <h3>follow us</h3>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fab fa-facebook-f"></i> facebook </a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fab fa-twitter"></i> twitter </a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fab fa-instagram"></i> instagram </a>
                        <a style={{textDecoration:"none"}} href="#"> <i class="fab fa-linkedin"></i> linkedin </a>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default footer;