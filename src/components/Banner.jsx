import React from 'react'

function Banner({title, subtitle}) {
  return (
    <div className='h-[35vh]  w-screen '>
        <div className="pt-28 text-center font-sans">
            <h1 className='font-semibold text-5xl text-amber-900'>{title}</h1>
            <p className=' text-lg my-3'>{subtitle}</p>
        </div>
    </div>
  )
}

export default Banner