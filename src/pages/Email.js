import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Email = () => {
  
  const [newEmail,setnewEmail] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })

  const handleChange = (evt) => {
    setnewEmail({...newEmail,[evt.target.name]: evt.target.value,})

  }
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o97mq8g', 'template_hxyicfc', form.current, 'RNf5R4RpyK6m0mkbf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  //
  return (
    <div classname = "container">
    <form ref={form} onSubmit={sendEmail}>
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
    <label for="country">Service Needed</label>
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