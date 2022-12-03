import React from 'react';
import Profi from '../../../assets/mypicture.jpg'

export default function About() {
  return (
    <div className='about container p-4'>
      <h1 className='text-start'>About me</h1>
      <img className="profile row justify-content-start" src={Profi} alt="Sangmi Yun's Graduation picture"/>
      <h1 className='text-end aboutname'>Sangmi Yun</h1>
      <p className='text-start'>
      Hello my name is sangmi Yun. I am born and raised in Korea for 20 years. I moved to the States about 4 years ago. I attended high school in Korea and was a captain of the English Newspaper club. I barely spoke English in Korea so when I first came here I had a hard time getting the confidence to speak with others. 
      </p>
      <p className='text-start'>
      I recently graduated from the University of Washington, with a Linguistic Major and an ASL minor. Currently, I am learning Full Stack web development from UW boot camp, and I'm going to earn certification in 2 weeks. 
      </p>
      <p className='text-start'>
      I like playing video Games 🎮 
      I play most FPS games 🔫 such as Overwatch, Apex, Valorant, and more! 
      I also like playing healing games 🧘 such as Terraria, Minecraft, Animal Crossing, and some VR games. 
      </p>
      <p className='text-start'>When there is a new game comes out I like to try it out! </p>
      
    </div>
  );
}
