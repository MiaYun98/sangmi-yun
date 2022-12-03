import { React, useState } from 'react';

export default function Contact() {
  return (
    <div className='container contact'>
      <h1>Contact Page</h1>
      {/* <form>
        
        <input name="name" Type="text">
        </input>
      </form> */}
      <form className='contactform'>
        <div>
          <label name="name">Name:</label>
          <input type="text" name="name" placeholder='name'/>
        </div>
        <div>
          <label name="email">Email address:</label>
          <input type="email" name="email" placeholder='email'/>
        </div>
        <div>
          <label name="message">Message:</label>
          <textarea name="message" rows="3" placeholder='message'/>
        </div>
      </form>
    </div>

  );
}
