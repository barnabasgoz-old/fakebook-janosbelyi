import React from 'react'
import Image from 'next/image'
import Pap from '../public/pap.jpeg'

function MiJarAFejedben(props) {
  return (
    <div className="w-full-width m-2 flex items-center justify-start gap-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
      <Image
        src={Pap}
        height={50}
        width={50}
        className="cursor-pointer rounded-full"
        alt="Bélyi János"
      ></Image>
      <input
        type="text"
        className="w-full rounded-full border-2 pt-2 pb-2 pl-4 pr-4 "
        placeholder="Mi jár a fejedben, János?"
      ></input>
    </div>
  )
}

export default MiJarAFejedben
