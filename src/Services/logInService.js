import axios from "axios";

export default function logInService(email, password) {
  return axios.post("/api/auth/login", {
    email: email,
    password: password,
  });
}
