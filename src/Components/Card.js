import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';

const Card = ({ data, trending, index }) => {
  const imageURL = useSelector(state => state.movieData.imageURL);
  
  return (
    <div className='w-full min-w-[230px] max-w-[230px] rounded h-auto overflow-hidden relative'>
        <img 
            src={imageURL+data?.poster_path}
            alt=''
        />

            {
                trending && (
                    <div className=' absolute top-5 text-gray-400 py-1 px-4 backdrop-blur-3xl bg-black/55 rounded-r-lg'>
                        #{index} Trending
                    </div>
                )
            }

            <div className='absolute  bottom-0 h-15 backdrop-blur-3xl w-full bg-black/60 p-2'>
                <div className="mt-2">
                    <p className="text-white text-lg font-medium text-ellipsis line-clamp-1">{data?.title || data?.name}</p>
                </div>

                <div className='text-sm text-neutral-400 flex justify-between items-center'>
                    <p>{moment(data.release_date).format("MMMM Do YYYY")}</p>
                    <p className='bg-primary px-1 text-black rounded-full text-xs font-medium'>Rating : {data.vote_average.toFixed(1)}</p>
                </div>
            </div>
    </div>
  );
};

export default Card;
