import React, {  useState } from 'react'
// import  useEffect  from 'react'
import { useSelector } from 'react-redux'

const BannerHome = () => {
  const bannerData = useSelector(state => state.movieData.bannerData);
  const imageURL = useSelector(state => state.movieData.imageURL);
  const [currentPage, setCurrentPage] = useState(0);

  // console.log("banner home", bannerData)

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  };

  const handleNext = () => {
    if (currentPage < bannerData.length -1) {
      setCurrentPage(currentPage + 1)
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() =>{
  //     if (currentPage < bannerData.length -1) {
  //       handleNext()
  //     }else{
  //       setCurrentPage(0)
  //     }
  //   },5000)

  //   return ()=>clearInterval(interval)

  // }, [bannerData, imageURL]);

  return (
    <section className='w-full'>
      <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
        {
          bannerData.map((data, index) => {
            // console.log("data", data)
            return(
              <div className='min-w-full min-h-screen sm:min-h-[450px] lg:min-h-full overflow-hidden ipad-pro:min-h-[1194px] ipad-air:min-h-[1180px] ipad-mini:min-h-[1024px] galaxy-tab-s7:min-h-[1280px] relative' style={{ transform : `translateX(-${currentPage * 100}%)`}}>
                  <div className='w-full h-full'>
                    <img 
                    key={index}
                      src={imageURL+data.poster_path}
                      alt=''
                      className='w-full h-full object-cover' 
                    />
                  </div>

                         {/* Pagination controls */}

                         <div className=' fixed flex items-center justify-center gap-5 bottom-8 ml-9 z-30 w-full sm:bottom-6 md:bottom-8 '>
                          <button onClick={handlePrevious} className='bg-green-300 hover:bg-gradient-to-l from-red-500 to-green-200 text-center py-2 font-bold px-3 text-sm sm:text-base md:text-lg mt-4 text-black rounded hover:bg-purple-300 shadow-md transition-all hover:scale-95'>
                            Previous
                          </button>

                          <span className="text-lg font-medium text-white hidden lg:flex">
                              Page {currentPage} of {bannerData.length}
                           </span>

                          <button onClick={handleNext} className='bg-slate-500 text-white hover:bg-gradient-to-l from-purple-500 to-green-200 text-center py-2 font-bold px-3 text-sm sm:text-base md:text-lg mt-4 rounded hover:bg-purple-300 shadow-md transition-all hover:scale-95'>
                            Next
                          </button>
                         </div>

                  <div className='absolute top-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent z-10'>
                  </div>

                  <div className='container mx-auto '>
                    <div className=' w-full absolute z-20 bottom-8 max-w-md px-4  text-white'>
                      <h1 className='font-bold text-2xl lg:text-4xl drop-shadow-xl'>{data?.title || data?.name}</h1>
                      <p className=' text-ellipsis line-clamp-3 my-3'>{data.overview}</p>

                      <div className='flex items-center gap-3 text-sm lg:text-2xl'>
                        <p>Rating : { Number(data.vote_average).toFixed(1) }+</p>
                        <span>|</span>
                        <p>View : { Number(data.popularity).toFixed(0) }</p>
                        <span>|</span>
                        <p>Release date : {new Date(data.release_date).toLocaleDateString()}</p>
                      </div>

                      <button className=' bg-primary hover:bg-gradient-to-l from-green-500 to-green-200 text-center py-2 font-bold px-3 mt-4 text-black rounded hover:bg-purple-300 shadow-md transition-all hover:scale-95'>
                        Play Now
                      </button>
                    </div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default BannerHome