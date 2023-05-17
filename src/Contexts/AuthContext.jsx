import { createContext, useState } from "react";
import logInService from "../Services/logInService";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const localStorageToken = JSON.parse(localStorage.getItem("token"));
  const localStorageUser = JSON.parse(localStorage.getItem("user"));

  const [loginData, setLoginData] = useState({
    token: localStorageToken?.token,
    user: localStorageUser?.user,
    isLoggedIn: !!localStorageUser?.user,
    isError: null,
  });

  async function logInUser(email, password) {
    try {
      const response = await logInService(email, password);
      const { foundUser, encodedToken } = response.data;

      setLoginData({
        token: encodedToken,
        user: foundUser,
        isLoggedIn: true,
        isError: null,
      });

      localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
      localStorage.setItem("user", JSON.stringify({ user: foundUser }));
    } catch (err) {
      setLoginData({
        ...loginData,
        isError: err.response.data.errors[0],
        isLoggedIn: false,
      });
    }
  }

  return (
    <AuthContext.Provider value={{ logInUser, loginData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
