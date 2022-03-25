import React from 'react'
import Veronka from '../public/veronka.jpeg'
import Gyurika from '../public/gyurika.jpeg'
import Valaki from '../public/valaki.jpeg'
import Pap from '../public/pap.jpeg'
import Esk1 from '../public/esk1.jpeg'
import Image from 'next/image'

function EskuvoUtan(props) {
  return (
    <div className="w-full-width m-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
      <div className="w-full-width flex items-center justify-start gap-2">
        <Image
          width={40}
          height={40}
          className="rounded-full shadow-lg"
          src={Pap}
        ></Image>
        <h3>
          <span className="cursor-pointer text-blue-600 underline">
            János Bélyi
          </span>
        </h3>
      </div>
      <div className="mt-2 mb-2 flex h-auto w-full flex-col items-center justify-start gap-2">
        <h3>
          Tegnap volt a "kis" testvérem esküvője, ami egy csodálatos esemény
          volt és nagyon örülök, hogy egy ilyen jóravaló fiatalemberhez ment
          hozzá. <br />
          Itt egy kép amit készítettem:
        </h3>
        <Image src={Esk1}></Image>
      </div>
      <hr />
      <div className="mt-2 mb-2 flex justify-evenly">
        <div>👍 Tetszik</div>
        <div>✉️ Hozzászólás</div>
      </div>
      <hr />
      <div className="mt-2 flex flex-col justify-start gap-2">
        <div className="w-full-width flex items-center justify-start gap-2 rounded-md bg-gray-200 p-1 shadow">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src={Gyurika}
          ></Image>
          <div className="flex h-10 flex-col justify-start gap-0">
            <h3 className="cursor-pointer text-xs text-blue-600 underline">
              György Wibra
            </h3>
            <h3>Köszönöm szépen!</h3>
          </div>
        </div>
        <div className="w-full-width flex items-center justify-start gap-2 rounded-md bg-gray-200 p-1 shadow">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src={Veronka}
          ></Image>
          <div className="flex h-10 flex-col justify-start gap-0">
            <h3 className="cursor-pointer text-xs text-blue-600 underline">
              Veronka Bélyi
            </h3>
            <h3>Köszi! Nagyon jó lett a kép is! 🎉</h3>
          </div>
        </div>
        <div className="w-full-width flex items-center justify-start gap-2 rounded-md bg-gray-200 p-1 shadow">
          <Image
            width={40}
            height={40}
            className="rounded-full"
            src={Valaki}
          ></Image>
          <div className="flex h-10 flex-col justify-start gap-0">
            <h3 className="cursor-pointer text-xs text-blue-600 underline">
              Valaki aki nem volt a könyvben
            </h3>
            <h3>Gratulálok János neked és a fiatal párnak is!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EskuvoUtan
