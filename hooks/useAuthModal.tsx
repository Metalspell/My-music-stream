import React from 'react'
import { create } from "zustand"
import { AuthModalProps } from '@/interfaces'

const useAuthModal = create<AuthModalProps>((set) => ({
  isOpen: false,
  mode: 'signin',
  onOpen: (mode) => set({
    isOpen: true,
    mode: mode || 'signin'
  }),
  onClose: () => set({
    isOpen: false
  }),
}));

export default useAuthModal;