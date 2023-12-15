import React from 'react'
import vite from '/vite.svg'
import grid1 from '/gridMix5.png'
import grid2 from '/gridMix6.png'

const Main = () => {
  return (
    <>
        <div className='flex flex-wrap justify-between'>
            <img src={vite} />
            <div className='px-3 py-1 rounded-2xl text-[#fff] bg-[#121212ff]'>
              Oyetunji3
            </div>
        </div>

        <h1 className='mt-16 mb-10 text-[#fff] text-4xl font-bold'>Good morning</h1>

        <div className="grid grid-cols-3 text-[#fff] gap-3">
            <div className=' p-4 bg-[#6667] rounded shadow-lg'>
              <img src={grid1} alt="" srcset="" />
              ghjbk</div>
            <div className=' p-4 bg-[#6667] rounded shadow-lg'>
            <img src={grid2} alt="" srcset="" />
              ghjbk</div>
            <div className=' p-4 bg-[#6667] rounded shadow-lg'>ghjbk</div>
            <div className=' p-4 bg-[#6667] rounded shadow-lg'>ghjbk</div>
            <div className=' p-4 bg-[#6667] rounded shadow-lg'>ghjbk</div>
            <div className=' p-4 bg-[#6667] rounded shadow-lg'>ghjbk</div>
        </div>
    </>
  )
}

export default Main