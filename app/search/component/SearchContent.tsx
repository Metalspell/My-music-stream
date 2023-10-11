'use client'
import MediaItem from "@/components/MediaItem"
import { SearchContentProps } from "@/interfaces"

const SearchContent = ({ songs }: SearchContentProps) => {
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
                  onClick={() => { }}
                  data={song}
                />
              </div>
            </div>
          ))}
        </div>
      )
      }
    </>
  )
}

export default SearchContent