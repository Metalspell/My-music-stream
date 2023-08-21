import React from 'react'
import { TbPlaylist } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'

type Props = {}

const Library = (props: Props) => {
  const onClick = () => {

  }
  return (
    <div className='flex flex-col'>
      <div className='flex items-center justify-between px-5 pt-4'>
        <div className='inline-flex items-center gap-x-2'>
          <TbPlaylist size={26} />
          <p className='text-neutral-400 font-medium text-md'>
            Your library
          </p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className='text-neutral-400 hover:text-white transition cursor-pointer'
        />
      </div>
      <div className='flex flex-col gap-y-2 mt-4 px-3'>
        Song List
      </div>
    </div>
  )
}

export default Library