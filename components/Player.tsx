'use client'

import useGetSongById from "@/hooks/useGetSongById";
import usePlayer from "@/hooks/usePlayer"

type Props = {}

const Player = (props: Props) => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId)
  return (
    <div>Player</div>
  )
}

export default Player