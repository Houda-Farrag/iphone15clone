import React from 'react'
import { hightlightsSlides } from '../../constants'

function VideoCarousel() {
  return <>
  <div className='flex items-center'>
    {hightlightsSlides.map((video,i)=>
        <div key={i} id='slider'>
            <div className='video-carousel_container'>
               <div className='w-full h-full flex-center overflow-hidden bg-black rounded-3xl'>
                <video playsInline={true} autoPlay preload='auto' muted>
                    <source src={video.video} type='video/mp4'></source>
                </video>
               </div>
               <div className='absolute top-12 left-[5%] z-10'>
                {video.textLists.map((text,itext)=>(
                    <p className='md:text-2xl text-xl font-medium' key={itext}>{text}</p>
                ))}
               </div>
            </div>
        </div>
    )}

  </div>
  </>
}

export default VideoCarousel