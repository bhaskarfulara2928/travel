import './Header.css';
import '../../App.css';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (
        <div className="Header">
            <section class="header">

                <NavLink style={{textDecoration:"none"}} className="logo" to={'/'}>Travel</NavLink>

                <nav class="navbar">
                    <NavLink style={{textDecoration:"none"}} to={'/'}>Home</NavLink>
                    <NavLink style={{textDecoration:"none"}} to={'/about'}>About</NavLink>
                    <NavLink style={{textDecoration:"none"}} to={'/package'}>Package</NavLink>
                    <NavLink style={{textDecoration:"none"}} to={'/book'}>book</NavLink>
                    <NavLink style={{textDecoration:"none"}} to={'/contact'}>ContactUS</NavLink>
                </nav>

                <div id="menu-btn" class="fas fa-bars"></div>

            </section>
        </div>
    );
}

export default Header;