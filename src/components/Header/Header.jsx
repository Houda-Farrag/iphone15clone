import React from "react";
import { Link } from "react-router-dom";
import { appleImg, bagImg, searchImg } from "../../utils";
import {navLists} from '../../constants'
function Header() {

    return (
    <>
      <header className="flex w-full py-5 sm:px-10 px-5 justify-between items-center">
        <nav className="flex w-full px-10 py-4 screen-max-width">
            <img src={appleImg} alt="Apple image" width={14} height={18} />          
          <div className="flex-1 justify-center gap-5 flex max-sm:hidden">
            {navLists.map((nav,i)=>{
                return <div key={i} className="cursor-pointer text-gray hover:text-white px-5 text-sm transition-all delay-75 ">
                    {nav}
                </div>
            })}
          </div>
         <div className="flex gap-3 max-sm:justify-end max-sm:flex-1 items-baseline">
 
            {[{icon:searchImg,alt:'search'},{icon:bagImg,alt:'bag'}].map((item,i)=>{
              return <img src={item.icon} alt={item.alt} width={14} height={18} key={i}/>
            })}
         </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
