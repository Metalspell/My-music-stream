"use client"

import { Database } from "@/types_db"
import { SuperbaseProviderProps } from "@/interfaces"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"
import { SessionContextProvider } from "@supabase/auth-helpers-react"

const SuperbaseProvider = ({ children }: SuperbaseProviderProps) => {
  const [supabaseClient] = useState(() =>
    createClientComponentClient<Database>()
  )
  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  )
}

export default SuperbaseProvider