import React from 'react'
import Image from 'next/image'
import Pap from '../public/pap.jpeg'

function Nav(props) {
  return (
    <div className="fixed z-50 flex h-12 w-full items-center justify-between bg-red-500 pl-2">
      <div>
        <h1 className="font-poppins cursor-pointer text-xl font-black text-white">
          fakebook
        </h1>
      </div>
      <div>
        <h1 className="text-l font-poppins cursor-pointer font-semibold text-white underline">
          Kezdőlap
        </h1>
      </div>
      <div className="flex h-12 w-24 items-center justify-evenly">
        <Image
          src={Pap}
          height={40}
          width={40}
          className="cursor-pointer rounded-full"
          alt="Bélyi János"
        ></Image>
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white">
          <h1 className="text-red-500">▼</h1>
        </div>
      </div>
    </div>
  )
}

export default Nav
