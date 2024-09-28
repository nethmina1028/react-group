import React from 'react'

function hero() {
  return (
    <>
    <div className='flex flex-col justify-between gap-20 mx-10 my-20 lg:flex-row lg:items-center'>
    <div >
    <h1 className='text-4xl font-bold leading-normal lg:text-6xl '>Building digital products and brands</h1>
    <div className='my-7'>
    <p className='text-lg text-gray-500 text-regular '>Here at flowbite we focus on markets where technology,innovation and <div>capital can unlock long term value and drive economic growth.</div></p>
    </div>
    <div className='flex flex-col gap-4 md:flex-row'>
    <a href='#'className='gap-5 px-6 py-2 font-medium text-white bg-purple-600 text-regular rounded-2xl hover:bg-gray-400'>Start 30 days of free trial</a>
    
    <a href='#' className='px-6 py-2 font-medium text-black border-2 text-regular rounded-2xl'>Pricing & FAQ</a>
    </div>
    </div>
    <div className='flex'>
    <img src="src\assets\ssc.png "width={600} height={400}/>
    </div>
   
    </div>
    </>
  )
}

export default hero