import React, { useEffect, useState } from 'react'
import { UserContextProps, UserInfo, Subscriprion } from '@/interfaces'
import { createContext } from 'react';
import { useSessionContext, useUser as useSupaUser } from '@supabase/auth-helpers-react';

export const UserContext = createContext<UserContextProps | undefined>(undefined)

type Props = {
  [propName: string]: any;
}

const UserContextProvider = (props: Props) => {
  const {
    session,
    isLoading: isLoadingUser,
    supabaseClient: supabase
  } = useSessionContext();
  const user = useSupaUser();
  const accessToken = session?.access_token ?? null;

  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState<UserInfo | null>(null);
  const [subscription, setSubscription] = useState<Subscriprion | null>(null);

  const getUserDetails = () => supabase
    .from('users')
    .select('*')
    .single();
  const getSubscription = () => supabase
    .from('subscriptions')
    .select('*, prices(*, products(*))')
    .in('status', ['trialing', 'active'])
    .single();

  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
      setIsLoadingData(true);

      Promise.allSettled([getUserDetails(), getSubscription()]).then(
        (res) => {
          const userDetailsPromise = res[0];
          const subscriprionsPromise = res[1];
          if (userDetailsPromise.status === 'fulfilled') {
            setUserDetails(userDetailsPromise.value.data as UserInfo);
          }
          if (subscriprionsPromise.status === 'fulfilled') {
            setSubscription(subscriprionsPromise.value.data as Subscriprion);
          }
          setIsLoadingData(false);
        }
      );
    } else if (!user && !isLoadingUser && !isLoadingData) {
      setUserDetails(null);
      setSubscription(null);
    }
  }, [user, isLoadingUser])

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingUser || isLoadingData,
    subscription
  }
  return <UserContext.Provider value={value} {...props} />
}

export default UserContextProvider