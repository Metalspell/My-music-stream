import React from 'react'
import { create } from "zustand"
import { UploadModalProps } from '@/interfaces'

const useUploadModal = create<UploadModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({
    isOpen: true
  }),
  onClose: () => set({
    isOpen: false
  })
}))

export default useUploadModal