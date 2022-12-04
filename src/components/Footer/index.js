import React from 'react';
import Insta from '../../assets/insta.png';
import Twitter from '../../assets/twitter.png';
import Github from '../../assets/github.png';
import Linkin from '../../assets/linkin.png';


export default function Footer() {
    return (
        <div className='social'>
            <a href='https://www.instagram.com/myun_98/?hl=en' target="_blank">
                <img src={Insta} alt="Instagram"></img>
            </a>
            <a href='https://twitter.com/MIAMo_98Y' target="_blank">
                <img src={Twitter} alt="Twitter"></img>
            </a>
            <a href='https://github.com/MiaYun98?tab=repositories' target="_blank">
                <img src={Github} alt="Github"></img>
            </a>
            <a href='https://www.linkedin.com/in/sangmi-yun-0a4241201/' target="_blank">
                <img src={Linkin} alt="LinkedIn"></img>
            </a>
        </div>
    );
}
