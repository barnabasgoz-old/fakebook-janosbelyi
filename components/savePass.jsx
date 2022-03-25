import React from 'react'

function SavePass(props) {
  return (
    <div className="w-full-width m-2 rounded-md border-0 bg-gray-50 p-4 shadow-md">
      <h1 className="font-poppins text-xl text-black">
        Szeretnéd jelszavadat elmenteni János?
      </h1>
      <h2 className="font-poppins text-sm text-gray-500">
        Ha elmented jelszavadat, gyorsabban és egyszerűbben bejelentkezhetsz a
        fakebook-ba.
      </h2>
      <div className="mt-4 flex justify-end gap-2">
        <button className="font-poppins rounded-md bg-red-500 pt-2 pb-2 pl-6 pr-6 text-sm text-white">
          Jelszó mentése
        </button>
        <button className="font-poppins rounded-md bg-gray-400 pt-2 pb-2 pl-6 pr-6 text-sm text-white">
          Mentés kihagyása
        </button>
      </div>
    </div>
  )
}

export default SavePass
