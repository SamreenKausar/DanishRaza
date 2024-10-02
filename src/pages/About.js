import React from 'react';
import Header from '../components/Header';

// import images
import Bird from '../img/about/w1.png';
// import link
import {Link} from 'react-router-dom';
 // import motion
import {motion as Motion} from 'framer-motion';
// import transition
import {transition1 } from '../transitions';


const About = () => {
  

  return <>
  <Header/>
  <Motion.section 
  initial={{opacity:0, y:'100%'}}
  animate={{opacity:1, y:0}}
  exit={{opacity:0, y:'100%'}}
  transition={transition1}
  className='section'>
    <div 
    className='container mx-auto h-full relative'>
      {/* text & img */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16 '> 
        {/* image */}
        <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src ={Bird} alt=''/>
        </div>
        {/* text */}
        <Motion.div 
         initial={{opacity:0, y:'-80%'}}
         animate={{opacity:1, y:0}}
         exit={{opacity:0, y:'-80%'}}
         transition={transition1}
        className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>About me</h1>
          <p className='mb-12 max-w-sm '>
         Hello, I am <b>Danish Raza</b> a Photographer based in Dubai, UAE. 
          <br/>
          <br/>
          I specialize in Potraits and outdoors Photography. I  like to capturing images that would make my audience want to discover more about nature.
          </p>
          <Link to={'/portfolio'} className='btn'>View my work.</Link>
        </Motion.div>
      </div>
    </div>
  </Motion.section>;
  </>
};

export default About;
