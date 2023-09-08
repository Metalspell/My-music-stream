"use client"

import React, { useEffect, useState } from 'react'
import ModalWindow from '@/components/ModalWindow';
import AuthModal from '@/components/AuthModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  return (
    // <ModalWindow
    //   title='Test'
    //   description="Test Description"
    //   isOpen
    //   onChange={() => { }}
    // >
    //   Test
    // </ModalWindow>
    <AuthModal />
  )
}

export default ModalProvider
