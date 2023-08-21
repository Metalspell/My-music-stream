"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
}

const Header = ({ className }: Props) => {
  const router = useRouter();
  const handleLogout = () => {

  }
  return (
    <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className
    )}>
      <div className='w-full mb-4 flex items-center justify-between'>

      </div>
    </div>
  )
}

export default Header