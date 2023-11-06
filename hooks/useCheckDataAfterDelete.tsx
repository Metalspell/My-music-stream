
import { useSessionContext } from "@supabase/auth-helpers-react";
import toast from "react-hot-toast";
import { FetchDataProps } from "@/interfaces";

const useCheckDataAfterDelete = async (
  userId: string,
  songId: string,
  supabaseClient: any
): Promise<boolean> => {
  const { data, error } = await supabaseClient
    .from('liked_songs')
    .select('*')
    .eq('user_id', userId)
    .eq('song_id', songId)
    .single();

  if (error) {
    return false;
  }

  return !!data;
};

export default useCheckDataAfterDelete;