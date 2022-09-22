import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import "./Email.css"


export const Email = () => {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID
  const PubKey= process.env.REACT_APP_PUBLIC_KEY
  
  const [newEmail,setnewEmail] = useState('')
  const initForm = {
    user_name: '',
    user_email: '',
    message: '',
  }  
  

  const handleChange = (evt) => {
    setnewEmail({...newEmail,[evt.target.name]: evt.target.value,})

  }
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PubKey )
      .then((result) => {
        setnewEmail(initForm)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  //
  return (
    <div id="email_container">
    <form id="email_form"ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input 
      type="text" 
      name="user_name" 
      value={newEmail.user_name}
      onChange={handleChange}
      />
      <label>Email</label>
      <input type="email" 
      name="user_email" 
      value={newEmail.user_email}
      onChange={handleChange}
      />
    <label htmlFor="country">Service Needed</label>
        <select id="country" name="country">
            <option value="meal-prep">Custom In-Home Weekly Meal Prep</option>
            <option value="party-services">Event and Party Services</option>
            <option value="consultation">Consultation</option>
    </select>
      <label>Message</label>
      <textarea name="message"
      type="text"
      value={newEmail.message}
      onChange={handleChange}
      />
      
      <input type="submit" 
      value="Send" 
      onChange={handleChange}
      />
    </form>
    </div>


  );
};

