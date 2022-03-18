import React from 'react'
import Veronka from '../public/veronka.jpeg'
import Gyurika from '../public/gyurika.jpeg'
import MadameKriszbay from '../public/madamekriszbay.jpeg'
import Image from 'next/image'

function ProfilePicChange(props) {
  return (
    <div className="w-full-width m-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
      <div className="w-full-width flex items-center justify-start gap-2">
        <Image
          width={40}
          height={40}
          className="rounded-full shadow-lg"
          src={Veronka}
        ></Image>
        <h3>
          <span className="cursor-pointer text-blue-600 underline">
            Veronka Bélyi
          </span>{' '}
          megváltoztatta profilképét.
        </h3>
      </div>
      <div className="mt-2 mb-2 flex h-auto w-full justify-center">
        <Image
          src={Veronka}
          width={240}
          height={240}
          className="rounded-full"
        ></Image>
      </div>
      <hr />
      <div className="mt-2 mb-2 flex justify-evenly">
        <div>❤️ Kedveled</div>
        <div>✉️ Hozzászólás</div>
      </div>
      <hr />
      <div className="mt-2 flex flex-col justify-start gap-2">
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
            <h3>
              Szép kép lett{' '}
              <span className="cursor-pointer text-base text-blue-600 underline">
                János Bélyi
              </span>
              ! Köszi!
            </h3>
          </div>
        </div>
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
            <h3>Jajj de szép vagy! ❤️</h3>
          </div>
        </div>
        <div className="w-full-width flex h-auto items-center justify-start gap-2 rounded-md bg-gray-200 p-1 shadow">
          <Image
            width={40}
            height={40}
            className="w-full rounded-full"
            src={MadameKriszbay}
          ></Image>
          <div className="flex w-auto flex-col justify-start gap-0">
            <h3 className="cursor-pointer text-xs text-blue-600 underline">
              Madame Kriszbay
            </h3>
            <h3>
              Veronka drágám. Egy hölgy nem tesz ki magáról képeket!{' '}
              <span
                onClick={() =>
                  alert('A francia szöveg sajnos nem jeleníthető meg.')
                }
                className="cursor-pointer text-sm text-gray-500"
              >
                - franciáról fordítva
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePicChange
