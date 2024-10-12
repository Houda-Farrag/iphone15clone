import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../../utils";

function Heros(props) {
  const [veidoSrc, setVeidoSrc] = useState(
    window.innerWidth > 768 ? heroVideo : smallHeroVideo
  );
  const handelChangeScreenSize = () => {
    if (window.innerWidth > 768) {
      setVeidoSrc(heroVideo);
    } else {
      setVeidoSrc(smallHeroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handelChangeScreenSize);
    return () => {
      window.removeEventListener("resize", handelChangeScreenSize);
    };
  }, []);
  useGSAP(() => {
    gsap.to(".hero-title", { opacity: 1, delay: 2 });
    gsap.to("#buttun-cat",{opacity:1, y:-50,delay:2})
  }, []);
  return (
    <section className="w-full nav-height bg-black relative ">
      <div className="h-5/6 w-full flex-center flex-col ">
        <p className="hero-title">iPhone 15 pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            autoPlay
            playsInline={true}
            className="pointer-events-none"
            muted
            key={veidoSrc}
          >
            <source src={veidoSrc} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center translate-y-20 opacity-0" id="buttun-cat">
        <a href="#highlights" className="btn capitalize">
          buy
        </a>
        <p className="capitalize font-normal text-xl">from $199/month or $999 </p>
      </div>
    </section>
  );
}

export default Heros;
