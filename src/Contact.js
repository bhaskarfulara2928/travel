import './App.css';
import Footer from './Component/HeaderFooter/footer';
function Contact() {
  return (
    <>
    <div className="Contact">
      <h1 style={{color:"#ffffff00"}}>C</h1>
      <div style={{marginTop:"100px",marginRight:"580px",color:"#05ce2d96"}}>
        <h1>Contact us in case of any querry. {<br></br>} We are always here for you.</h1>

       
      </div>
      
    </div>
    <div className="container">
      <form >
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}}></textarea>

        <input type="submit" value="Submit"/>
      </form>
    </div>
      <Footer/>
    </>
  );
}

export default Contact;