import React from 'react';
// import icons
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
   ImFlickr3
} from 'react-icons/im';


const Socials = () => {


  return <div 
  className='hidden xl:flex ml-24'>
   <ul className='flex gap-x-4'>
    <li>
      <a href='https://www.facebook.com/razadanish' target='blank'>
        <ImFacebook/>
      </a>
    </li>
    <li>
      <a href='https://www.twitter.com' target='blank'>
        <ImTwitter/>
      </a>
    </li>
    <li>
      <a href='https://www.instagram.com' target='blank'>
        <ImInstagram/>
      </a>
    </li>
    <li>
      <a href='https://www.flickr.com/people/130215809@N08/' target='blank'>
        <ImFlickr3/>
      </a>
    </li>
   </ul>
  </div>;
};

export default Socials;