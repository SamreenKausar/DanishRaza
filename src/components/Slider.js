import React from "react";
import ImageGallery from "react-image-gallery";
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageData from "./ImageResource";
import { CgClose } from "react-icons/cg";


const Slider = ({imageType, setOpenGallery})=>{
 
  let datatype = imageType;
  let data;
  if(datatype==='mariyam'){
    data =ImageData.mariyam;
    }
else if(datatype==='landscape'){
      data = ImageData.landscape;
    }
else if(datatype==='others'){
      data = ImageData.other;
    }
else if(datatype==='flower'){
      data = ImageData.flower;
    }  
   
    return <>
    <div className="noSelect pt-10  h-screen ">
    <CgClose onClick={()=> setOpenGallery(false) } className='absolute z-30 lg:right-2 lg:top-2 right-2 top-10 text-4xl  p-1 text-white bg-black/30 text-bold rounded-full cursor-pointer'/>
    <ImageGallery items={data} showFullscreenButton={false} showPlayButton={false} showBullets={true} showThumbnails={false} />   
    </div>
    </>
};

export default Slider;