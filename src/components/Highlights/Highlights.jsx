import React from 'react';
import { rightImg, watchImg } from '../../utils';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import VideoCarousel from '../VideoCarousel/VideoCarousel';
function Highlights(props) {
    
    useGSAP(()=>{
        gsap.to('#title',{opacity:1,y:0})
        gsap.to('.link',{opacity:1,y:0,duration:2, stagger:.5})
    },[])
    
    return (
        <section id='highlights' className='w-screen h-full overflow-hidden common-padding bg-zinc'>
            <div className='screen-max-width'>
                <div className='mb-12 md:flex w-full items-end justify-between'>
                    <h1 id='title' className='section-heading capitalize'>get the highlitshs</h1>
                    <div className='flex flex-wrap items-end gap-5'>
                        <p className='link' >watch the film 
                        <img  src={watchImg} className='ml-2'/>
                        </p>
                        <p className='link'>watch the film 
                        <img  src={rightImg} className='ml-2' />
                        </p>
                    </div>
                </div>
                <VideoCarousel/>
            </div> 
        </section>
    );
}

export default Highlights;