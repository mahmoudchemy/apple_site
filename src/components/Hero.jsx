/* eslint-disable no-unused-vars */
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {heroVideo, smallHeroVideo} from '../utils'
import { useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc]=useState(window, innerWidth<760 ? smallHeroVideo:heroVideo)
  useGSAP(()=>{
    gsap.to('#hero',{opacity:1, delay:1.5})
  },[])

  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
            <p id='hero'className="hero-title">Atelier Haytham Mribah</p>
            <div className='md:w-10/12 w-9/12'>
              <video>
                <source src={videoSrc}/>
              </video>
            </div>
        </div>
    </section>
  )
}


export default Hero