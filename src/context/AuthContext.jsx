import { createContext, useState, useContext, useEffect } from "react";
import { Users } from "../data/users";

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate checking for persisted auth state
  useEffect(() => {
    const savedUser = sessionStorage.getItem("camchop_user");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (email, password) => {
    const user = Users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      const userData = { ...user, password: undefined };
      setCurrentUser(userData);
      sessionStorage.setItem("camchop_user", JSON.stringify(userData));
      return { success: true, user: userData };
    }
    return { success: false, error: "Invalid email or password" };
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("camchop_user");
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...currentUser, ...updates };
    setCurrentUser(updatedUser);
    sessionStorage.setItem("camchop_user", JSON.stringify(updatedUser));
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
