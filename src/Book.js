
import './App.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Book() {
    return (
        <>
            <div class="heading" style={{background:"url(images/header-bg-3.png) no-repeat"}}>
                <h1>book now</h1>
            </div>
            <section className="booking">

                <h1 className="heading-title">book your trip!</h1>

                <form action="book_form.php" method="post" className="book-form">

                    <div className="flex">
                        <div className="inputBox">
                            <span>name :</span>
                            <input type="text" placeholder="enter your name" name="name" />
                        </div>
                        <div className="inputBox">
                            <span>email :</span>
                            <input type="email" placeholder="enter your email" name="email" />
                        </div>
                        <div className="inputBox">
                            <span>phone :</span>
                            <input type="number" placeholder="enter your number" name="phone" />
                        </div>
                        <div className="inputBox">
                            <span>address :</span>
                            <input type="text" placeholder="enter your address" name="address" />
                        </div>
                        <div className="inputBox">
                            <span>where to :</span>
                            <input type="text" placeholder="place you want to visit" name="location" />
                        </div>
                        <div className="inputBox">
                            <span>how many :</span>
                            <input type="number" placeholder="number of guests" name="guests" />
                        </div>
                        <div className="inputBox">
                            <span>arrivals :</span>
                            <input type="date" name="arrivals" />
                        </div>
                        <div className="inputBox">
                            <span>leaving :</span>
                            <input type="date" name="leaving" />
                        </div>
                    </div>

                    <input type="submit" value="submit" className="btn" name="send"  style={{marginTop:"35px"}}/>

                </form>

            </section>
        </>
    );
}

export default Book;