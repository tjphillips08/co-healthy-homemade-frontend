import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
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

  return (
    <div classname = "container">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
    <label for="country">Service Needed</label>
        <select id="country" name="country">
            <option value="meal-prep">Custom In-Home Weekly Meal Prep</option>
            <option value="party-services">Event and Party Services</option>
            <option value="consultation">Consultation</option>
    </select>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};