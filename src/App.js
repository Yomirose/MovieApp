import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBannerData, setImageURL } from "./redux/movieSlice";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        // Fetch data from the API
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/week",
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`, 
              Accept: "application/json",
            },
          }
        );

        // Dispatch the data to Redux
        dispatch(setBannerData(response.data.results));

        // console.log("response", response.data.results);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchTrendingData();
  }, [dispatch]);

useEffect(() =>{
  const fetchConfig = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/configuration",
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`, 
            Accept: "application/json",
          },
        }
      );

      const baseImageUrl = response.data.images.secure_base_url + "original";
      // console.log("configuration Data", baseImageUrl)

      dispatch(setImageURL(baseImageUrl))

    } catch (error) {
      console.error("Error fetching Config", error)
    }
  }
  fetchConfig()
}, [dispatch])

  return (
    <div className="App">
      <div className="">
        <Header />
        <div>
          <Outlet/>
        </div>
          <div>
          <Footer/>
          </div>      
      </div>
    </div>
  );
}

export default App;
