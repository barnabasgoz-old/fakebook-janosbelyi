import React from 'react'
import Image from 'next/image'
import GlogovaSzeretlek from '../public/glogovaSzeretlek.jpeg'
import FalusiEgyhaz from '../public/falusiegyhaz.jpeg'
import MezoGazdasag from '../public/mezogazd.jpeg'

function Pages(props) {
  return (
    <div className="h-auto w-full pb-2 pr-2 pl-2">
      <div className="w-full-width m-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
        <h1 className="font-poppins text-lg">Kedvelt oldalaid:</h1>
        <div className="flex flex-col justify-start gap-2">
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={MezoGazdasag}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Mezőgazdaság egyszerűen</h2>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={FalusiEgyhaz}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Falusi Egyházi létesítmé...</h2>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={GlogovaSzeretlek}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Glogova Online</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pages
