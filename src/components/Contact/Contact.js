import React from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault()
    
    emailjs.sendForm('service_pj2rduh','template_lbnydym', e.target , 'ucZWwsP_PL0klx1C6')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
}

    return (
        <div className=' bg-gradient-to-r from-violet-500 to-fuchsia-500" max-h-100'>
            <p className='max-w-sm mx-auto my-10'>
            I am interested in opportunities - especially ambitious or large
            projects. However, if you have other request or question, don't
            hesitate to contact me using below form either.
          </p>
           <form onSubmit={sendEmail}>
          <div className="form-control w-full max-w-xs mx-auto max-h-screen">
          <input type="text" required placeholder="Your Name" name='name' class="input my-2 w-full input-bordered max-w-xs" />   
           <input type="email" required placeholder="Your Email" name='email' class="input my-2 w-full input-bordered max-w-xs" />   
           <input type="text" required placeholder="Subject" name='subject' class="input my-2 input-bordered w-full max-w-xs" />   
           <textarea class=" my-2 textarea textarea-bordered" required name='message' placeholder="Text"></textarea> 
           
           <input type="submit" className="btn btn-primary" value="SEND" />
          </div>
          </form> 
        </div>
    );
};

export default Contact;