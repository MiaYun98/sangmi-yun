import React from 'react';
import './style.css';

import Calcu from '../../../assets/calcudate.png';
import MusicG from '../../../assets/screenshot.png';
import Proti from '../../../assets/portfo.png';


export default function Portfolio() {
  return (
    <div className='about container p-4'>
      <h1>Portfolio</h1>
      <main className='cardPart'>
        <div className='card'>
          <h2 className='title'>Shrub club</h2>
          <a href='https://miayun98.github.io/Calcu-date/' target='_blank'>
            <img className='calcuImg' src={Calcu} alt='Image of placeholer website'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/jordan-koichiro-johnson/shrub-club' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Music Quiz Game</h2>
          <a href='https://musicguava.herokuapp.com/' target='_blank'>
            <img className='musicImg' src={MusicG} alt='Image of Music Quiz Game website'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/itsDavidK/music-quiz-game' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Caludate</h2>
          <a href='https://miayun98.github.io/Calcu-date/' target='_blank'>
            <img className='calcuImg' src={Calcu} alt='Image of Calcudate website'></img>
          </a>
          <a className='calcudateGit' href='https://miayun98.github.io/Calcu-date/' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Portfolio</h2>
          <a href='https://miayun98.github.io/Calcu-date/' target='_blank'>
            <img className='calcuImg' src={Proti} alt='Image of Portfolio website'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/MiaYun98/sangmi-yun' target='_blank'><p>Github Repo</p></a>
        </div>
      </main>
    </div>
  );
}