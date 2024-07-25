"use client";

import { getSession } from "@/actions/sessions";
import { SessionPayload } from "@/types/session.type";
import { AuthContextType, UserContext } from "@/types/user.type";
import {
  useContext,
  createContext,
  Context,
  ReactNode,
  useEffect,
  useState,
} from "react";

export const AuthContext: Context<AuthContextType|undefined> = createContext(undefined);


const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userS, setUserS] = useState<UserContext|null>(null);

  useEffect(() => {
    userSession();
  }, []);

  const userSession = async () => {
    
    const user: SessionPayload | null = await getSession();

    if (user?.username) {
      setUserS({username: user.username});
    }
  };


  return (
    <AuthContext.Provider value={{ userS, setUserS }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthProvider;
