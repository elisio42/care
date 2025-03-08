import React, { createContext, useState, useContext } from "react";

type AuthContextType = {
  user: string | null;
  signUp: (emal: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<string | null>(null);

  const signUp = async () => {
 
  }
  return <AuthContext.Provider value={{user,  signIn, signOut, signUp}}>{children}</AuthContext.Provider>;
};
