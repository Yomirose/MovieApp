import React from 'react';
import { useSelector } from 'react-redux';

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector(state => state.movieData.imageURL);
  
  return (
    <div className='w-full  max-w-[240px] rounded h-80 overflow-hidden relative'>
        <img 
            src={imageURL+data?.poster_path}
            alt=''
        />

        <div className='absolute top-5'>
            {
                trending && (
                    <div className=' text-gray-400 py-1 px-4 backdrop-blur-3xl overflow-hidden bg-black/55 rounded-r-lg'>
                        #{index} Trending
                    </div>
                )
            }
        </div>

        <div className='absolute bottom-0 h-14 text-white'>
            <p>{data?.title || data?.name}</p>
        </div>
    </div>
  );
};

export default Card;
