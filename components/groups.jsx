import React from 'react'
import Image from 'next/image'
import GlogovaSzeretlek from '../public/glogovaSzeretlek.jpeg'
import Papok from '../public/papok.png'
import Esernyo from '../public/esernyőFanok.jpeg'

function Groups(props) {
  return (
    <div className="h-auto w-full pt-2 pl-2 pr-2">
      <div className="w-full-width m-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
        <h1 className="font-poppins text-lg">Csoportjaid:</h1>
        <div className="flex flex-col justify-start gap-2">
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={GlogovaSzeretlek}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Glogova Szeretlek</h2>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={Papok}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Papok a fakebookon</h2>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={Esernyo}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Esernyő kedvelők hivatal...</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Groups
