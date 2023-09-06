import { UserContext } from "@/providers/UserContextProvider"
import { useContext } from "react"

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('We must use MyUserContextPrivider')
  }
  return context;
}