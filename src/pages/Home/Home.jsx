import React, { useEffect, useState } from 'react'
import Heros from "../../components/Heros/Heros.jsx";
import Highlights from '../../components/Highlights/Highlights.jsx';

export  function Home() {
 
 return <>
  <Heros/>
<Highlights/>
 </>
}

export default Home