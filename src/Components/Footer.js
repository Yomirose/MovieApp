import React from 'react';
import MobileApp from './MobileApp';
import LargeScreen from './LargeScreen';

const Footer = () => {
  return (
    <div className='bg-neutral-600 w-full lg:h-28 flex items-center justify-center sticky bottom-0 z-10'>
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