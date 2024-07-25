"use client";

import { getSession } from "@/actions/sessions";
import { SessionPayload } from "@/types/session.type";
import {
  useContext,
  createContext,
  Context,
  ReactNode,
  useEffect,
  useState,
} from "react";

export const AuthContext: Context<{ name: string }> = createContext({
  name: "",
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userS, setUserS] = useState<SessionPayload>({});

  useEffect(() => {
    userSession();
  }, []);

  const userSession = async () => {
    const user: SessionPayload | null = await getSession();

    if (user) {
      setUserS(user);
    }
  };

  if (!userS?.username) {
    return;
  }

  return (
    <AuthContext.Provider value={{ name: userS?.username }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
