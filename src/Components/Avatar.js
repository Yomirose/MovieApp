import React from 'react'
import { LuCircleUserRound } from "react-icons/lu";

const Avatar = () => {
  const bgColor = [
    "bg-slate-200",
    "bg-gray-200",
    "bg-teal-200",
    "bg-green-200",
    "bg-cyan-200",
    "bg-yellow-200",
    "bg-blue-200",
    "bg-amber-200",
    "bg-indigo-200",
];

const randomNumber = Math.floor(Math.random() * bgColor.length);
const randomBgColor = bgColor[randomNumber];

  return (
    <div className={`mr-4 ${randomBgColor} h-14 w-14 mt-2 rounded-full flex justify-center items-center overflow-hidden`}>
     <LuCircleUserRound
        size={60}
     />
    </div>
  )
}

export default Avatar