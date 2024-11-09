import React, { useEffect, useState } from 'react'
import Heros from "../../components/Heros/Heros.jsx";
import Highlights from '../../components/Highlights/Highlights.jsx';
import ModelPhone from '../../components/ModelPhone/ModelPhone.jsx';

export function Home() {

  return <>
    <Heros />
    <Highlights />
    <ModelPhone/>
  </>
} 

export default Home