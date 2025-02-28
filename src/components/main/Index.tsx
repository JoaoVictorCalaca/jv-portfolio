import { url } from 'inspector'
import Image from 'next/image'
import React from 'react'

function Main() {
  return (
    <main className='p-3 flex sm:flex-row flex-col-reverse justify-center sm:justify-around items-center gap-4 w-full font-mono'>
        <div className='flex flex-col gap-2 px-20'>
          <h1 className='text-4xl font-bold sm:text-left text-center'>João Víctor</h1>
          <p className='text-red-400 font-bold sm:text-left text-center'>Cursando Engenharia de Computação no IF Goiano</p>
        </div>

        <div>
          <Image
            src='https://github.com/joaovictorcalaca.png'
            width={200}
            height={200}
            alt='Foto - jv'
            className='rounded-full'
          />
        </div>
    </main>
  )
}

export default Main