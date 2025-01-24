import React, { useState } from 'react';
import Logo from "../assets/Logo.png"
import Avatar from '../Components/Avatar';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import "../App.css";


const Header = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search?${search}`);
    }
  };

  return (
    <header className=' fixed flex justify-around bg-primary w-full h-15 bg-opacity-65 top-0 left-0 z-50 ' >
      <div className='mx-6 px-2'>
        <div className='logo'>
          <img src={Logo}
           alt=''
           width={250}
          />
        </div>
      </div>
      <form className='searchForm' onSubmit={handleSubmit}>
        <input text="text" 
        placeholder='Search here...'
        className='border-none outline-none m-2 text-xl'
        onChange={(e) => setSearch(e.target.value)}
         />

         <button className='searchIcon' onClick={handleSubmit}>
          <AiOutlineSearch />
         </button>
      </form>

      <div className='w-16 h-16 mr-3'>
        <Avatar />
      </div>
    </header>
  )
}

export default Header