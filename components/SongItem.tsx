import React from 'react'
import { SongItemProps } from '@/interfaces'
import useLoadImage from '@/hooks/useLoadImage'
import Image from 'next/image'

const SongItem = ({ data, onClick }: SongItemProps) => {
  const imagePath = useLoadImage(data)
  return (
    <div
      onClick={() => onClick(data.id)}
      className='relative flex flex-col items-center justify-center p-3 overflow-hidden transition rounded-md cursor-pointer group gap-x-4 bg-neutral-400 hover:bg-neutral-300'
    >
      <div
        className='relative w-full h-full overflow-hidden rounded-md aspect-square'
      >
        <Image
          className="object-cover"
          src={imagePath || '/images/liked.png'}
          fill
          alt="Image"
        />
      </div>
      <div className='flex flex-col items-start w-full p-4 gap-y-1'>
        <p className='w-full font-semibold truncate'>
          {data.title}
        </p>
      </div>
    </div>
  )
}

export default SongItem