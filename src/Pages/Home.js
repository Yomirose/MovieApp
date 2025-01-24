import React from 'react'
import BannerHome from '../Components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'

const Home = () => {
  const trendingData = useSelector(state => state.movieData.bannerData)
  return (
    <div>
      <BannerHome/>

      <div className=' container mx-auto px-4 my-12 '>
        <h1 className='text-white text-lg font-bold lg:text-2xl mb-3'>Trending Movie</h1>
        
        <div className='grid grid-cols-[repeat(auto-fit,240px)] gap-6'>
          {
            trendingData.map((data, index)=>{

              return(
                <Card key={data.id}  data={data} index={index+1} trending={true} />
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Home