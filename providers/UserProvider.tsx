"use client"
import UserContextProvider from "./UserContextProvider";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  )
}
export default UserProvider;