import axios from "axios";


export const signUp = (body) => {
  return axios.post("/api/v1/users",body);
}

export const login = (creds) => {
  return axios.post("/api/v1/auth",{},{auth:creds});
}

export const getUsers = (currentPage=0,pageSize=5) => {
  return axios.get(`/api/v1/users?currentPage=${currentPage}&pageSize=${pageSize}`);
}



export const getUser = (username) => {
  return axios.get(`/api/v1/users/${username}`);
}
