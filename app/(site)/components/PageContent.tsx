"use client"
import SongItem from "@/components/SongItem"
import { PageContentProps } from "@/interfaces"

const PageContent = ({ songs }: PageContentProps) => {
  return (
    <>
      {songs.length === 0 ? (
        <div className="mt-4 text-neutral-400">
          <h3>No songs yet</h3>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-8">
          {
            songs.map((song) => (
              <SongItem
                key={song.id}
                onClick={() => { }}
                data={song}
              />
            ))
          }
        </div>
      )}
    </>
  )
}

export default PageContent