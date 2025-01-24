import React from 'react'
// import { Routes, Route} from 'react-router-dom';
// import Movies from "../Pages/Movies";
// import Error from "../Pages/Error";
// import Search from "../Pages/Search";
// import Trending from "../Pages/Trending";
// import TVSeries from "../Pages/TVSeries";
import { createBrowserRouter } from 'react-router-dom';
import App from "../App";
import Home from '../Pages/Home';
import Explore from '../Pages/Explore';
import Details from '../Pages/Details';
import Search from '../Pages/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: ":explore",
        element: <Explore/>
      },
      {
        path: ":explore/:id",
        element: <Details/>
      },
      {
        path: "search",
        element: <Search/>
      }
    ]
  }
])

export default router


// const index = () => {
//   return (
//     <div>
//         <Routes>
//             <Route path='/' element={<Trending/>} />
//             <Route path='/search' element={<Search/>} />
//             <Route path='/movies' element={<Movies/>} />
//             <Route path='/tvseries' element={<TVSeries/>} />
//             <Route path='*' element={<Error/>} />

//         </Routes>
//     </div>
//   )
// }

// export default index