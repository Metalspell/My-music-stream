'use client'
import { PlayerContentProps } from "@/interfaces"
import MediaItem from "./MediaItem"
import LikeButton from "./LikeButton"
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { HiSpeakerXMark, HiSpeakerWave } from 'react-icons/hi2'
import Slider from "./Slider"

const PlayerContent = ({ song, songUrl }: PlayerContentProps) => {
  const Icon = true ? BsPauseFill : BsPlayFill;
  const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      <div className="flex justify-start w-full">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      <div className="flex items-center justify-end w-full col-auto md:hidden">
        <div className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer ">
          <Icon size={30} className="text-black" />
        </div>
      </div>
      <div className="items-center justify-center hidden w-full h-full md:flex max-w-[720px] gap-x-6">
        <AiFillStepBackward
          size={30}
          className="transition cursor-pointer text-neutral-500 hover:text-white"
          onClick={() => { }}
        />
        <div
          className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer"
          onClick={() => { }}
        >
          <Icon
            size={30}
            className="text-black"
          />
        </div>
        <AiFillStepForward
          onClick={() => { }}
          size={30}
          className='transition cursor-pointer text-neutral-500 hover:text-white'
        />
      </div>
      <div className="justify-end hidden w-full pr-2 md:flex">
        <div className="flex items-center gap-x-2 w=[120px]">
          <VolumeIcon
            onClick={() => { }}
            size={35}
            className="cursor-pointer"
          />
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default PlayerContent