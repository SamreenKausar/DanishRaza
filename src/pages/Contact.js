import React from 'react';
import Header from '../components/Header';

// import images
import Img1 from '../img/contact/bird.png';

// import motion
import {motion  as Motion} from 'framer-motion';
// import transition
import {transition1 } from '../transitions';

const Contact = () => {
// form submission state
const [result, setResult] = React.useState("");
// form submission function
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
// add access key from https://web3forms.com/ generate key for email id
    formData.append("access_key", "cd5084c0-b28c-4833-bff4-dbdf201061c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return <>
  <Header/>
  <Motion.section 
  initial={{opacity:0, y:'100%'}}
  animate={{opacity:1, y:0}}
  exit={{opacity:0, y:'100%'}}
  transition={transition1}
  className='section'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
      {/* bg */}
      <Motion.div 
      initial={{opacity:0, y:'100%'}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:'100%'}}
      transition={transition1}
      className='hidden lg:flex bg-[#EFE9E3] absolute bottom-0 left-0 right-0 top-72 -z-10 '>
      </Motion.div>
      {/* text & form */} 
      {/* text */}
      <div 
      className='lg:flex-1 lg:pt-32 px-4'>
        <h1 className='h1'>Contact me</h1>
        <p className='mb-12'>I would love to get suggestions from you.</p>
        {/* form */}
        <form onSubmit={onSubmit} className='flex flex-col gap-y-4'>
          <div className='flex gap-x-10'>
            <input name= 'name' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:tex-[#757879]' 
            type='text' 
            placeholder='Your Name ' required/>
            <input name='email' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:tex-[#757879]' 
            type='text' 
            placeholder='Your Email Address' required/>
          </div>
          <input name='message' className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:tex-[#757879]' 
            type='text' 
            placeholder='You message ' required/>
            <button type='submit' className='btn mb-[30px] mx-auto lg:mx=0 self-start'>Send</button>
        </form>
      </div>
      {/* image */}
      <Motion.div 
      initial={{opacity:0, y:'100%'}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:'100%'}}
      transition={{transition: transition1, duration: 1.5 }}
      className='lg:flex-1'>
        <img src={Img1} alt='img'/>
      </Motion.div>
      </div>
    </div>
  </Motion.section>;
  </>
};

export default Contact;
