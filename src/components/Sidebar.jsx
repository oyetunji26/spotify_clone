import React from 'react'
import home from '/Home_S.svg'

const Sidebar = () => {
  return (
    <div className='px-8 pt-20'>
        <ul className='text-xl'>
            <li className='py-2 flex'>
              <img src={home} className='w-6 h-6 mr-2' alt="home svg" />
              Home</li>
            <li className='py-2'>Search</li>
            <li className='py-2'>Your Library</li>
        </ul>

        <ul className='pt-8'>
            <li className='text-lg py-2'>Create Playlist</li>
            <li className='text-lg'>Liked Songs</li>
        </ul>

        <div className='py-32 my-32'>g</div>
        <div className='py-32 my-32'></div>
    </div>
  )
}

export default Sidebar