import './App.css';
import Footer from './Component/HeaderFooter/footer';
function About() {
  return (
    <>
    <div className='About'>
      <h1 style={{color:"#ffffff00"}}>About</h1>
      <div style={{marginTop:"180px",marginRight:"580px",color:"Aqua",marginLeft:"50px",width:"500px"}}>
        <h1 style={{color:"white",fontFamily:"cursive"}}>Why Us?</h1>
        <h3 style={{color:"white",fontFamily:"cursive"}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut atque ipsam enim consequatur sed rem, laboriosam in voluptas voluptatem. Similique, praesentium non? Magni ab doloribus, {<br></br>} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut atque ipsam enim consequatur sed rem, laboriosam in voluptas voluptatem. Similique, praesentium non? Magni ab doloribus,</h3>
       
      </div>
    </div>
      <Footer/>
    </>
  );
}

export default About;