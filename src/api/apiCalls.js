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

export const updateUser = (username,body) => {
  return axios.put(`/api/v1/users/${username}`,body);
}

export const postHoax = (body) => {
  return axios.post(`/api/v1/hoaxes`,body);
}

export const getHoaxes = (page=0) => {
  return axios.get(`/api/v1/hoaxes?page=${page}`);
}