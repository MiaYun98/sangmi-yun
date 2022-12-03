import React from 'react';
import Right from '../../../assets/file.gif';

export default function Home() {
  const handleLanguages = () => {
    console.log('lang')
  }

  return (
    <div className='container main'>
      <main className='list'>
        <ul className='left col'>
          <h1>Linguistics</h1>
          <li>Phonetics</li>
          <li>Syntax</li>
          <li>Morphology</li>
          <li>Praat</li>
          <li>NLP</li>
          <br/>
          <h2>Foreign Languges:</h2>
          <li>English</li>
          <li>Korean - Native</li>
          <li>Mandarin</li>
          <li>Japanese</li>
          <li>ASL</li>
        </ul>
        <ul className='right col'>
          <h1>Full-Stack Web Dev</h1>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>mySQL</li>
          <li>MongoDB</li>
          <br/>
          <h2>Other Aspects: </h2>
          <li>Python</li>
          <li>Java</li>
          <li>Intro of Computational Linguistics</li>
        </ul>
      </main>
      <img className="earth" src={Right} alt="right Earth" onClick={() => handleLanguages()} />
    </div>
  );
}
