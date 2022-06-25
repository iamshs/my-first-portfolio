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
        <div className=' mt-0 bg-gradient-to-r mx-auto from-slate-600 to-violet-600  min-h-screen'>
            <p className='max-w-md text-amber-400 font-bold mx-auto py-10  ' style={{"text-shadow": "1px 1px rgb(38 38 38)"}}>
            I am interested in opportunities - especially ambitious or large
            projects. However, if you have other request or question, don't
            hesitate to contact me using below form either.
          </p>
           <form onSubmit={sendEmail}>
          <div className="form-control w-full max-w-md mx-auto min-h-screen">
          <input type="text" required placeholder="Your Name" name='name' className="input my-2 w-full input-bordered " />   
           <input type="email" required placeholder="Your Email" name='email' className="input my-2 w-full input-bordered " />   
           <input type="text" required placeholder="Subject" name='subject' className="input my-2 input-bordered w-full " />   
           <textarea className=" my-2 textarea textarea-bordered" required name='message' placeholder="Text"></textarea> 
           
           <input type="submit" className="btn btn-primary" value="SEND" />
          </div>
          </form> 
        </div>
    );
};

export default Contact;