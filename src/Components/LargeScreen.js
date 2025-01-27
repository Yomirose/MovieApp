import React from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';

const LargeScreen = () => {
    const data = [
        {
          icon: "fa fa-home",
          name: "Home",
          link: "/",
        },
        {
          icon: "fas fa-film",
          name: "Movies",
          link: "/movies",
        },
        {
          icon: "fas fa-tv",
          name: "TV Show",
          link: "/tv",
        },
      ];
  return (
    <>
      <div className="container">
        <div className="row-fluid px-6 text-white flex justify-center ">
          <div className="text-center flex gap-64 justify-center">
            {data.map((Val) => {
              return (
                <>
                  <NavLink to={`${Val.link}`}>
                    <button className="col-sm-2 col-md-2 cursor-pointer active:scale-50 transition-all">
                      <i className={`${Val.icon} text-xl`} id="fire"></i>
                      <br />
                      <h5 className="pt-1 text-xl ">{Val.name}</h5>
                    </button>
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
            <div>
              <h2 className='text-white text-center text-sm mt-4'>
                Made By: Roseline Fayomi
              </h2>
            </div>
      </div>
    </>
  )
}

export default LargeScreen