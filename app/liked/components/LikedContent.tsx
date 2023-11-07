'use client'

import React, { useEffect } from 'react'
import { LikedContentProps } from '@/interfaces'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser';
import MediaItem from '@/components/MediaItem';
import LikeButton from '@/components/LikeButton';

const LikedContent = ({ songs }: LikedContentProps) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace('/')
    }
  }, [isLoading, user, router])

  return (
    <div className='flex flex-col w-full p-6 gap-y-2'>
      {songs.length === 0 ? (
        <div className='flex flex-col w-full px-6 gap-y-2 text-neutral-500'>
          No liked songs
        </div>
      ) : (
        songs.map((song) => (
          <div
            className='flex items-center w-full gap-x-4'
            key={song.id}
          >
            <div className='flex-1'>
              <MediaItem
                onClick={() => { }}
                data={song}
              />
            </div>
            <LikeButton songId={song.id} />
          </div>
        ))
      )}
    </div>
  )
}

export default LikedContent