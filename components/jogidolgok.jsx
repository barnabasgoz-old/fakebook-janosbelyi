import React from 'react'
import Image from 'next/image'
import Solve from '../public/solve.jpeg'
import SzövegÉrt from '../public/szövegért.png'
import IgazHamis from '../public/igazhamis.png'
import Matek from '../public/matek.jpeg'

function JogiDolgok(props) {
  return (
    <div className="h-auto w-full pb-2 pr-2 pl-2">
      <div className="w-full-width m-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
        <h1 className="font-poppins text-lg ">Jogi információk:</h1>
        <h2>
          Ez az oldal egy magyar nyelv "házifeladat"nak készült és semmilyen
          kapcsolatban nincs a Facebook-kal, ami a Meta vállalat tulajdona. Az
          oldalon található profilképek nem létező személyeket ábrázolnak, amit
          a meserséges inteligencia generált{' '}
          <a href="https://this-person-does-not-exist.com/en">
            ezen az oldalon
          </a>
          . A többi kép az interneten talált képek és (nagy eséllyel) nem állnak
          szerzői jogok védelme alatt.
        </h2>
      </div>
    </div>
  )
}

export default JogiDolgok
