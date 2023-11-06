'use client'
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import { LikeButtonProps } from "@/interfaces"
import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation"
import { useEffect, useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useCheckDataAfterDelete from "@/hooks/useCheckDataAfterDelete";

const LikeButton = ({ songId }: LikeButtonProps) => {
  const router = useRouter();
  const { supabaseClient } = useSessionContext();
  const authModal = useAuthModal();
  const { user } = useUser();
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    console.log(typeof user.id + ' userID')
    console.log(typeof songId + ' songId')
    const fetchData = async () => {
      const { data, error } = await supabaseClient
        .from('liked_songs')
        .select('*')
        .eq('user_id', user.id)
        .eq('song_id', songId)
        .single();
      if (!error && data) {
        setIsLiked(true)
      }
    };
    fetchData()
  }, [songId, supabaseClient, user?.id])

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleClick = async () => {
    if (!user) {
      return authModal.onOpen();
    }

    if (isLiked) {
      const { error } = await supabaseClient
        .from('liked_songs')
        .delete()
        .eq('user_id', user.id)
        .eq('song_id', songId);
      if (error) {
        toast.error(error.message);
      } else {
        const isDataExists = await useCheckDataAfterDelete(user.id, songId, supabaseClient);
        if (error || isDataExists) {
          toast.error('The selected object could not be deleted. Permissions to delete from the database may not be configured.');
        } else {
          setIsLiked(false);
          toast.success('Removed from the favorite songs');
        }
      }
    } else {
      const { error } = await supabaseClient
        .from('liked_songs')
        .insert({
          song_id: songId,
          user_id: user.id
        })
      if (error) {
        toast.error(error.message)
      } else {
        setIsLiked(true)
        toast.success('Liked');
      }
    }
    router.refresh();
  }

  return (
    <button
      onClick={handleClick}
      className="transition hover:opacity-70"
    >
      <Icon
        color={isLiked ? '#22c55e' : 'white'}
        size={25}
      />
    </button>
  )
}

export default LikeButton