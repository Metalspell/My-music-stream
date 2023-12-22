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
  const { onClose, isOpen, mode } = useAuthModal();

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

  const title = mode === 'signin' ? 'Welcome back!' : 'Create an account';
  const description = mode === 'signin' ? 'Login to your account' : 'Sign up for a new account';

  return (
    <ModalWindow
      title={title}
      description={description}
      isOpen={isOpen}
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
        view={mode === 'signin' ? 'sign_in' : 'sign_up'}
      />
    </ModalWindow>
  );
};

export default AuthModal;