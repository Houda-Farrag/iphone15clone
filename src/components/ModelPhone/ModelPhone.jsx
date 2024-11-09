import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { yellowImg } from "../../utils";

export default function ModelPhone() {

    const [size, setsize] = useState('small')
    const [modelPhone, setModelPhone] = useState({
        title:'iPhone 15 Pro',
        color: ['red','green','blue'],
        img:yellowImg
    })

    

  useGSAP(() => {
    gsap.to("#heading", { opacity: 1, y: 0});
  },[])
    return (
    <>
      <section className="common-padding">
        <div className="screen-max-width">
          <h1 id="heading" className="section-heading">Model Phone</h1>
          <div className="flex flex-col items-center mt-5">
            <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
