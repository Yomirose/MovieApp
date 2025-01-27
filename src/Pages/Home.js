import React from 'react'
import BannerHome from '../Components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../Components/Card'

const Home = () => {
  const trendingData = useSelector(state => state.movieData.bannerData)
  return (
    <div>
      <BannerHome/>

      <div className=' container mx-auto px-4 my-12 overflow-hidden '>
        <h1 className='text-white text-lg font-bold lg:text-2xl mb-3'>Trending Movie</h1>
        
        <div className='overflow-hidden'>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 grid-flow-col overflow-x-scroll '>
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

    </div>
  )
}

export default Home