import React from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';

const MobileApp = () => {
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
          name: "TV Series",
          link: "/tvseries",
        },
        {
          icon: "fas fa-search",
          name: "Search",
          link: "/search",
        },
      ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-dark footer">
            {data.map((Val) => {
              return (
                <>
                  <NavLink to={`${Val.link}`}>
                    <button className="col-sm-2 col-md-2 cursor-pointer active:scale-50 transition-all">
                      <i className={`${Val.icon}`} id="fire"></i>
                      <br />
                      <h5 className="pt-1 fs-6">{Val.name}</h5>
                    </button>
                  </NavLink>
                </>
              );
            })}
          </div>
        </div>
        <h2 className='text-white text-center text-sm'>
          Made By: Roseline Fayomi
        </h2>
      </div>
    </>
  )
}

export default MobileApp