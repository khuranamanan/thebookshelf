import { createContext, useState } from "react";
import logInService from "../Services/logInService";
import signUpService from "../Services/signUpService";
import { v4 as uuid } from "uuid";

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

  async function signUpUser(email, password, firstName, lastName) {
    console.log("sending this:", email, password, firstName, lastName);
    try {
      const response = await signUpService(
        email,
        password,
        firstName,
        lastName
      );
      const { createdUser, encodedToken } = response.data;

      setLoginData({
        token: encodedToken,
        user: createdUser,
        isLoggedIn: true,
        isError: null,
      });

      localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
      localStorage.setItem("user", JSON.stringify({ user: createdUser }));
    } catch (err) {
      setLoginData({
        ...loginData,
        isError: err.response.data.errors[0],
        isLoggedIn: false,
      });
    }
  }

  function signOutUser() {
    setLoginData({
      token: null,
      user: null,
      isLoggedIn: false,
      isError: null,
    });

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }

  function handleAddAddress(addressToAdd) {
    const updatedAddresses = [
      ...loginData.user.userAddresses,
      { ...addressToAdd, id: uuid() },
    ];

    setLoginData({
      ...loginData,
      user: {
        ...loginData.user,
        userAddresses: updatedAddresses,
      },
    });

    localStorage.setItem(
      "user",
      JSON.stringify({ ...loginData.user, userAddresses: updatedAddresses })
    );
  }

  function editAddresses(updatedAddresses) {
    setLoginData({
      ...loginData,
      user: {
        ...loginData.user,
        userAddresses: updatedAddresses,
      },
    });

    localStorage.setItem(
      "user",
      JSON.stringify({ ...loginData.user, userAddresses: updatedAddresses })
    );
  }

  function deleteAddress(addressIdToDelete) {
    const updatedAddresses = loginData.user.userAddresses.filter(
      (addr) => addr.id !== addressIdToDelete
    );

    setLoginData({
      ...loginData,
      user: {
        ...loginData.user,
        userAddresses: updatedAddresses,
      },
    });

    localStorage.setItem(
      "user",
      JSON.stringify({ ...loginData.user, userAddresses: updatedAddresses })
    );
  }

  return (
    <AuthContext.Provider
      value={{
        logInUser,
        signUpUser,
        signOutUser,
        loginData,
        handleAddAddress,
        editAddresses,
        deleteAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
