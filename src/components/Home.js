import React from 'react';
import houseIcon from './house.jpeg';

function Home() {
  return (
    <div className='mx-auto' >
      <img 
      src={houseIcon}
      alt='House Icon'
      />
       <p className='home'>This is the Homepage</p>
    </div>
  )
}

export default Home