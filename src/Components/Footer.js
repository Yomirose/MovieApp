import React from 'react';
import MobileApp from './MobileApp';
import LargeScreen from './LargeScreen';

const Footer = () => {
  return (
    <div className='bg-neutral-600 bottom-0 w-full h-28 bg-opacity-65 flex items-center justify-center fixed z-10'>
      <div className='hidden lg:block md:block'>
        <LargeScreen />
      </div>

      <div className='lg:hidden md:hidden'>
        <MobileApp />
      </div>
    </div>
  )
}

export default Footer