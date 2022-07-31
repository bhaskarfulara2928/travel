import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About'
import Contact from './Contact';
import Header from './Component/HeaderFooter/Header';
import Footer from './Component/HeaderFooter/footer'
import Package from './package';
import Book from './Book'
import { Carousel } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/package' element={<Package />}></Route>
        <Route path='/book' element={<Book/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
