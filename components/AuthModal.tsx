"use client"
import React, { useEffect } from 'react'
import ModalWindow from './ModalWindow'
import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import useAuthModal from '@/hooks/useAuthModal';

const AuthModal = () => {
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const { session } = useSessionContext();
  const authModal = useAuthModal();
  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  useEffect(() => {
    if (session) {
      router.refresh();
      onClose();
    }
  }, [session, router, onClose]);


  return (
    <ModalWindow
      title='Welcome back!'
      description='Login to your account'
      isOpen={authModal.isOpen}
      onChange={onChange}
    >
      <Auth
        providers={["github"]}
        theme='dark'
        magicLink
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "#404040",
                brandAccent: '#22c55e'
              }
            }
          }
        }}
        supabaseClient={supabaseClient}
      />
    </ModalWindow>
  )
}

export default AuthModal