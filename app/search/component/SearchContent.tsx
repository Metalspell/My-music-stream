'use client'
import LikeButton from "@/components/LikeButton"
import MediaItem from "@/components/MediaItem"
import { SearchContentProps } from "@/interfaces"
import useOnPlay from '@/hooks/useOnPlay'
import { useState } from "react"

const SearchContent = ({ songs }: SearchContentProps) => {
  const onPlay = useOnPlay(songs);
  
  return (
    <>
      {songs.length === 0 ? (
        <div className="flex flex-col w-full px-6 gap-y-2 text-neutral-400">
          No songs found
        </div>
      ) : (
        <div className="flex flex-col w-full px-6 gap-x-2">
          {songs.map((song) => (
            <div
              key={song.id}
              className="flex items-center w-full gap-x-4"
            >
              <div className="flex-1">
                <MediaItem
                  onClick={(id: string) => onPlay(id)} 
                  data={song}
                />
              </div>
              <LikeButton songId={song.id} />
            </div>
          ))}
        </div>
      )
      }
    </>
  )
}

export default SearchContent