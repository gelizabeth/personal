import React from 'react';
import './css/Contact.css';
import emailjs from 'emailjs-com'

function Contact() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_fi2prwj', 'template_jwtayq4', e.target, 'user_jwSGIxvHHCMnUiwrbKEiw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <div className="contact">
           
            <form className="contact__form" onSubmit={sendEmail}>
            <h3>I'm currently available for work</h3>
            <p>If you are interested in hiring me, have some question or just want to say hi, then get in touch.</p>
                
                <input type="text" name="name" placeholder="Enter your name " required/>
                
                <input type="email" name="email" placeholder="Enter your email " required/>
                
                <input type="text" name="subject" placeholder="Enter message subject"/>
                
                
                <textarea name="message" rows={4} placeholder="Your message here..." required/>
                <input type="submit" value="Submit →" className="contact__formButton"/>
            </form>

        </div>
    )
}

export default Contact
