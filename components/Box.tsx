import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  className?: string
  children: React.ReactNode
}

const Box = ({ className, children }: Props) => {
  return (
    <div className={twMerge(`
      bg-neutral-900
      rounded-lg
      h-fit
      w-full
    `,
      className
    )}>
      {children}
    </div>
  )
}

export default Box