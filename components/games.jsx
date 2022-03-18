import React from 'react'
import Image from 'next/image'
import Solve from '../public/solve.jpeg'
import SzövegÉrt from '../public/szövegért.png'
import IgazHamis from '../public/igazhamis.png'
import Matek from '../public/matek.jpeg'

function Games(props) {
  return (
    <div className="h-auto w-full pb-2 pr-2 pl-2">
      <div className="w-full-width m-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
        <h1 className="font-poppins text-lg">Játszanál?</h1>
        <div className="flex flex-col justify-start gap-2">
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={IgazHamis}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Igaz vagy Hamis?</h2>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={SzövegÉrt}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Szövegértés felnőtteknek</h2>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={Solve}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Vajon te meg tudod oldani?</h2>
          </div>
          <div className="flex cursor-pointer items-center justify-start gap-2">
            <Image
              src={Matek}
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
            <h2>Matek feladatok, ha una...</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Games
