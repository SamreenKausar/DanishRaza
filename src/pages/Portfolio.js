import React, {useState} from 'react';
import Header from '../components/Header';
import Grid from "../components/Grid";


// import motion
import {motion as Motion} from 'framer-motion';
// import transition
import {transition1 } from '../transitions';

// import slider
import Slider from '../components/Slider';
// import ImageSlider from '../components/ImageSlider';
// menu variants
const menuVariants = {
  hidden: {
    x: '100%',
  },
  show: {
    x:0,
    transition: {
      ease : [0.6, 0.01, -0.05, 0.9],
    },
  },

};


const Portfolio = () => {
  const [openGallery, setOpenGallery] =useState(false);
  const [imageType, setImageType] = useState('mariyam');
 
  return<>
    <div  className={`${openGallery ? 'hidden' : ''}`}>
    <Header/>
    </div>
    <Motion.div 
    variants= {menuVariants}
    initial='hidden'
    animate={openGallery ? 'show' : ''}
    className={`${openGallery ? '' : 'hidden'} h-full w-full relative`}>
    <Slider {...{imageType, setOpenGallery}}/>      
    {/* <ImageSlider {...{data}}/> */}
    </Motion.div>
    {/* Picture Grid */}
    <Motion.div
    initial={{opacity:0, y:'100%'}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:'100%'}}
    transition={transition1}
    className={`${ openGallery ? 'hidden' : ''}`}  onClick={()=> {setOpenGallery(true);}}>
      <Grid {...{imageType, setImageType}}/>
    </Motion.div>

  </>;
};

export default Portfolio;
