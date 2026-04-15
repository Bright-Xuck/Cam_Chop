import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (email, password) => {
    // Backend integration will be added here
    return { success: false, error: "Backend not connected" };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...currentUser, ...updates };
    setCurrentUser(updatedUser);
    return { success: true, user: updatedUser };
  };

  const contextValue = {
    currentUser,
    isLoading,
    isAuthenticated: !!currentUser,
    login,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
