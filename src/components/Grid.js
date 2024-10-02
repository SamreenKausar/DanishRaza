import React from "react";
// import motion
import {motion as Motion} from 'framer-motion';
// import transition
import {transition1 } from '../transitions';
// import images
import Image1 from '../img/portfolio/flower.jpg';
import Image2 from '../img/portfolio/landscape.jpg';
import Image3 from '../img/portfolio/people.jpg';
import Image4 from '../img/portfolio/others.jpg';

const Grid = ({imageType, setImageType}) => {
   
  
    return<>
    <div className='container mx-auto h-full'>
        <div className= 'pt-24 lg:pt-36 pb-8 flex flex-col items-center'>
          {/*  */}
          
          
          <div className={` flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8`}>
            {/* text */}
          <Motion.div 
          initial={{opacity:0, y:'-80%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'-80%'}}
          transition={transition1}
          className={`flex flex-col lg:items-start`}>  
            <h1 className='h1'>
              Portfolio
            </h1>
            <p className='mb-12 max-w-sm'>Here are some of my past work. </p>
          </Motion.div>         
          {/* images grid */}
          <div 
          initial={{opacity:0, y:'-80%'}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y:'-80%'}}
          transition={transition1}        
          className={` grid lg:grid-cols-2 gap-y-6 gap-x-3`}>
            {/* image */}
            <div 
            onClick={()=> { setImageType('flower'); }}
            className='flex flex-col max-w-[250px] lg:max-w-[320px] h-[161px] lg:h-[200px] drop-shadow-md hover:scale-105 transition-all duration-500'>
              <img className='object-coverh-full lg:h-[180px] rounded-t-md' src={Image1} alt='image1'/>
              <p className='text-center h-auto w-full bg-white rounded-b-md p-1'>Flowers</p>
            </div>
            <div  
            onClick={()=> { setImageType('landscape');} }
            className='flex flex-col max-w-[250px] lg:max-w-[320px] h-[161px] lg:h-[200px] drop-shadow-md hover:scale-105 transition-all duration-500 '>
              <img className='object-coverh-full lg:h-[180px] rounded-t-md' src={Image2} alt='image2'/>
              <p className='text-center h-auto w-full bg-white rounded-b-md p-1'>Landscapes</p>
            </div>
            <div 
            onClick={()=> {setImageType('mariyam'); }}
            className='flex flex-col max-w-[250px] lg:max-w-[320px] h-[161px] lg:h-[200px] drop-shadow-md hover:scale-105 transition-all duration-500 '>
              <img className='object-coverh-full lg:h-[180px] rounded-t-md' src={Image3} alt='image3'/>
              <p className='text-center h-auto w-full bg-white rounded-b-md p-1'>Mariyam</p>
            </div>
            <div 
            onClick={()=> {setImageType('others');} }
            className='flex flex-col max-w-[250px] lg:max-w-[320px] h-[161px] lg:h-[200px] drop-shadow-md hover:scale-105 transition-all duration-500 '>
              <img className='object-coverh-full lg:h-[180px] rounded-t-md' src={Image4} alt='image4'/>
              <p className='text-center h-auto w-full bg-white rounded-b-md p-1'>Others</p>
            </div> 
          </div>
          </div>
        </div>
      </div>
    </>;

};

export default Grid;