import React from 'react'
import { create } from "zustand"
import { AuthModalProps } from '@/interfaces'

const useAuthModal = create<AuthModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({
    isOpen: true
  }),
  onClose: () => set({
    isOpen: false
  })
}))

export default useAuthModal