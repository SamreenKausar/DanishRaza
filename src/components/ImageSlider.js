import {React, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCompress, FaExpand } from "react-icons/fa";
import ImageData from "./ImageResource";

const ImageSlider = ({data}) =>{
  
 const [screenMode, setscreenMode]= useState(false);
  const hide = () =>{ screenMode? setscreenMode(false): setscreenMode(true)};
  const [curr, setCurr] = useState(0);
  const prev = () => curr===0 ? setCurr(data.length-1) : setCurr(curr-1);
  const next= () => curr===data.length-1 ? setCurr(0): setCurr(curr+1);
  
    return <>
    <div className={`flex flex-col justify-center items-center ${ screenMode? '':'p-2'} gap-y-4 sm:gap-y-2 `}>
          <div className={`relative ${ screenMode? 'lg:h-screen lg:w-screen w-screen':'h-[65%] w-[65%] lg:h-[700px] lg:w-[1200px] lg:pt-6'} noSelect drop-shadow-md relative`} >
            <img onClick={hide} className='h-[100%] w-[100%] transition-all ease-out duration-500 ' src= {data[curr].original} alt="carousel Image"/>
            <FaExpand onClick={hide} className={`${screenMode ? 'hidden': ''} absolute bottom-0 right-0 text-4xl m-2 text-white cursor-pointer`}/> 
            <FaCompress onClick={hide} className={`${screenMode ? '': 'hidden'}absolute bottom-0 right-0 text-4xl m-2 text-white cursor-pointer`}/>
            <FaChevronLeft onClick={prev} className='text-4xl cursor-pointer m-2 z-30 absolute inset-y-2/4 left-0 text-white'/>
            <FaChevronRight onClick={next} className='text-4xl cursor-pointer m-2 z-30 absolute inset-y-2/4 right-0 text-white'/>
          </div>
      <div className={`${screenMode ? 'hidden' : ''} lg:h-[110px] h-[64px]  w-[90%] lg:p-2  flex justify-start items-center gap-4 overflow-hidden relative`}>
      {data.map((s)=> <img key={s.id} className={`lg:h-[100px] h-[58px] ${s.id-1===curr ? 'border-2 lg:border-4 border-blue-700 scale-105' : ''} `} src={s.thumbnail} onClick={()=> setCurr(s.id-1)}/>)}
      <div className="absolute flex justify-between w-full items-center inset-y-2/4 ">
      <FaChevronLeft onClick={prev} className="text-3xl text-white cursor-pointer m-2"/>
      <FaChevronRight onClick={next} className="text-3xl text-white cursor-pointer m-2"/>
      </div>
      </div>
    </div>
    </>;
};
export default ImageSlider;