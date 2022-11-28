import axios from "axios";


export const signUp = (body) => {
  return axios.post("/api/v1/users",body);
}

export const login = (creds) => {
  return axios.post("/api/v1/auth",{},{auth:creds});
}
