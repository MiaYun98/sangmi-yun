import { React, useState } from 'react';
import './style.css';

export default function Contact() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  }

  const sendingEmailHandle = e => {
    e.preventDefault();
    if (errorfuntion() === true) {
      alert('You can not submit empty blank')
    } else if (validateEmail(emailInput) === false) {
      alert('Invalid Email')
    }
    else {
      console.log(nameInput)
      console.log(emailInput)
      console.log(messageInput)
      alert('submited')
    }
  }

  const errorfuntion = () => {
    if(nameInput == "" || emailInput == "" || messageInput == "") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className='container contact'>
      <h1>Contact Page</h1>
      <form className='contactform' onSubmit={sendingEmailHandle}>
        <div>
          <label name="name">Name:</label>
          <input type="text" name="name" placeholder='name' onChange={e => setNameInput(e.target.value.trim())} />
        </div>
        <div>
          <label name="email">Email address:</label>
          <input type="email" name="email" placeholder='email' onChange={e => setEmailInput(e.target.value.trim())} />
        </div>
        <div>
          <label name="message">Message:</label>
          <textarea name="message" rows="3" placeholder='message' onChange={e => setMessageInput(e.target.value.trim())} />
        </div>
        <div className='buttonloca'>
          <button type="submit" className="btn btn-light">Submit</button>
        </div>
      </form>
    </div>
  );
}
