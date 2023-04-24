import React from 'react'
import { NavLink } from 'react-router-dom'

function Navlinks() {
  return (
    <div>
        <div className="flex text-center justify-center gap-5 my-8 font-light text-xl ">
            <NavLink className= 'rounded-3xl px-8 p-3 text-zinc-white bg-[#111] text-white hover:bg-[#222] transition-all ease-in duration-200' to='/'><a href=''>Photos</a></NavLink>
            <NavLink className= 'rounded-3xl px-8 p-3 text-zinc-white bg-[#111] text-white hover:bg-[#222] transition-all ease-in duration-200' to='/Videos'><a href=''>Videos</a></NavLink>
        </div>
    </div>
  )
}

export default Navlinks