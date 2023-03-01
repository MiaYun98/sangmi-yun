import React from 'react';
import DownImg from '../../../assets/download.png';
import ImgResume from '../../../assets/Resume.jpg';
import './style.css';

export default function Resume() {
  return (
    <div className='resume container p-4'>
      <div>
        <h1>Resume</h1>
        <a className='download' href='https://cdn.discordapp.com/attachments/796122268337963041/1079823454557188156/Sangmi_Yun_resume_2023.pdf' target='_blank' download='SangmiYun'><img src={DownImg} alt="Download"></img></a>
      </div>
      <img className='resume' src={ImgResume} alt="Download"></img>
      <div className='row justify-content-center skillpart'>
        <div className='col-6'>
          <h3>Front-end Proficiencies</h3>
          <ul className="skills">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>Bootstrap</li>
            <li>Progressive Web Applications</li>
            <li>Handlebars</li>
            <li>Local Storage, Session Storage, IndexedDB</li>
            <li>React.js</li>
          </ul>
        </div>
        <div className='col-6'>
          <h3>Back-end Proficiencies</h3>
          <ul className="skills">
            <li>API Design</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Server Side Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
