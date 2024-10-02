import React, {useContext} from 'react';
import Header from '../components/Header';

// import Images 
import Main from '../img/home/1_thumbnail.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import {motion as Motion} from 'framer-motion';
// import transition
import {transition1 } from '../transitions';


const Home = () => {
  return <>
  <Header/>
  <Motion.section 
  initial={{opacity:0}}
  animate={{opacity:1}}
  exit={{opacity:0}}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full relative'>
    {/* text & img wrapper */}
      <div className='flex flex-col justify-center '>
        {/* text */}
        <Motion.div 
        initial={{opacity:0, y: '-50%'}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y: '-50%'}}
        transition={transition1}
        className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1'>
            Through my Lens
          </h1>
          {/* <p className='text-[20px] lg:text-[24px]'>
              Dubai, UAE
          </p> */}
          <Link to={'/portfolio'} className='btn mb-[30px] mt-3'>check out</Link>
        </Motion.div>
        {/* image */}
        <div className='flex justify-end max-h-96 lg:max-h-max'>
          <Motion.div 
          initial={{ scale: 0 }}
          animate={{scale: 1}}
          exit={{ scale: 0 }}
          transition={transition1}
          className='relative lg:-right-40'>
             <Motion.img 
             whileHover={{scale: 1.1}}
             transition={transition1}
             src={Main} alt=''/>
          </Motion.div>
        </div>
      </div>
    </div>
  </Motion.section>
  </>;
};

export default Home;
