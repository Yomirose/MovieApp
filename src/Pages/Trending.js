// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Trending = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1); // Current page
//   const [totalPages, setTotalPages] = useState(1); // Total pages available from API

//   useEffect(() => {
//     const fetchTrending = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/trending/all/day?language=en-US&page=${page}`,
//           {
//             headers: {
//               Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
//               Accept: "application/json",
//             },
//           }
//         );
//         console.log("Fetched data:", response.data);
//         setData(response.data.results);
//         setTotalPages(response.data.total_pages); // Set the total pages from API
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchTrending();
//   }, [page]); // Re-fetch data whenever the page changes

//   const handlePrevious = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };

//   const handleNext = () => {
//     if (page < totalPages) {
//       setPage(page + 1);
//     }
//   };

//   return (
//     <div className="pt-7">
//       {/* <h4 className="fs-2 text-red-600 text-center my-4">
//         <i className="fas fa-fire mx-2 text-danger"></i>
//         Trending Images
//         <i className="fas fa-fire mx-2 text-danger"></i>
//       </h4> */}

//       {/* Display trending movies */}
//       <div className="flex flex-wrap gap-5 max-md:flex-nowrap justify-around">
//         {data.map(({ 
//           name,
//           title,
//           poster_path,
//           first_air_date,
//           release_date,
//           media_type,
//           id,
//          }) => (
//           <>
//           <img
//             key={id}
//             src={
//               poster_path
//                 ? `https://image.tmdb.org/t/p/w300/${poster_path}`
//                 : "https://via.placeholder.com/300x450?text=No+Image"
//             }
//             alt="Trending"
//             className="my-2"
//           />

//           <div className="">
//            <h2 className="">{title || name}</h2>
//           </div>
//           </>
//         ))}
//       </div>

//       {/* Pagination controls */}
//       <div className="pagination-controls flex justify-center gap-4 my-4">
//         <button
//           className={`px-4 py-2 border ${page === 1 ? "opacity-50 cursor-not-allowed" : "bg-primary"}`}
//           onClick={handlePrevious}
//           disabled={page === 1}
//         >
//           Previous
//         </button>
//         <span className="text-lg font-medium">
//           Page {page} of {totalPages}
//         </span>
//         <button
//           className={`px-4 py-2 border ${page === totalPages ? "opacity-50 cursor-not-allowed" : "bg-primary"}`}
//           onClick={handleNext}
//           disabled={page === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Trending;
