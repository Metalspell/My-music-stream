'use client'
import useLoadImage from "@/hooks/useLoadImage"
import { MediaItemProps } from "@/interfaces"
import Image from "next/image"

const MediaItem = ({ data, onClick }: MediaItemProps) => {
  const imgUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id)
    }
  }
  return (
    <div
      onClick={handleClick}
      className="flex items-center w-full p-2 rounded-md cursor-pointer gap-x-3 hover:bg-neutral-800/50"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          fill
          src={imgUrl || '/images/liked.png'}
          alt="pic"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col overflow-hidden gap-y-1">
        <p className="text-white truncate">
          {data.title}
        </p>
        <p className="text-sm truncate text-neutral-400">
          {data.author}
        </p>
      </div>
    </div>
  )
}

export default MediaItem