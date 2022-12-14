import React from 'react';
import './style.css';

import Calcu from '../../../assets/calcudate.png';
import MusicG from '../../../assets/screenshot.png';
import Proti from '../../../assets/portfo.png';
import ngram from '../../../assets/n-gram.png';
import Sla from '../../../assets/sla.png';
import Shrub from '../../../assets/Untitled.png';

export default function Portfolio() {
  return (
    <div className='about container p-4'>
      <h1>Portfolio</h1>
      <main className='cardPart'>
        <div className='card'>
          <h2 className='title'>Shrub club</h2>
          <p>Full functional Website using React</p>
          <a href='https://shrubclub.netlify.app/' target='_blank'>
            <img className='ShrubClubImg' src={Shrub} alt='Shrub'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/jordan-koichiro-johnson/shrub-club' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Stutter n-gram Project</h2>
          <p>Building n-gram model with the stutter Dataset</p>
          <a href='https://docs.google.com/document/d/1oZ_FAx_t9eqpq_7ovm4H8WKsHIFpxzSJVLrqmf5Q1J0/edit?usp=sharing' target='_blank'>
            <img className='calcuImg' src={ngram} alt='Image of n-gram project Research'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/jordan-koichiro-johnson/shrub-club' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Music Quiz Game</h2>
          <p>Project using Front & Back-end</p>
          <a href='https://musicguava.herokuapp.com/' target='_blank'>
            <img className='musicImg' src={MusicG} alt='Image of Music Quiz Game website'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/itsDavidK/music-quiz-game' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Caludate</h2>
          <p>Project using Front-end</p>
          <a href='https://miayun98.github.io/Calcu-date/' target='_blank'>
            <img className='calcuImg' src={Calcu} alt='Image of Calcudate website'></img>
          </a>
          <a className='calcudateGit' href='https://miayun98.github.io/Calcu-date/' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Portfolio</h2>
          <p>React based Website including Portfolio information</p>
          <a href='https://miayun98.github.io/Calcu-date/' target='_blank'>
            <img className='calcuImg' src={Proti} alt='Image of Portfolio website'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/MiaYun98/sangmi-yun' target='_blank'><p>Github Repo</p></a>
        </div>
        <div className='card'>
          <h2 className='title'>Syntax Structure of L2 Learning</h2>
          <p>Influence of L1 word order on L2 Interpretation</p>
          <a href='https://docs.google.com/presentation/d/1oXSrhnDRS3y24G8TlJ5w7KCQGjg6yfai3_KIpBYtQq8/edit?usp=sharing' target='_blank'>
            <img className='calcuImg' src={Sla} alt='Image of SLA powerpoint'></img>
          </a>
          <a className='calcudateGit' href='https://github.com/jordan-koichiro-johnson/shrub-club' target='_blank'><p>Github Repo</p></a>
        </div>
      </main>
    </div>
  );
}