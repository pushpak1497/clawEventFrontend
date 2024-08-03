import axios from "axios";

const API_URL = "http://localhost:4000/api/v1";

export const registerUser = (data) =>
  axios.post(`${API_URL}/users/register`, data);
export const loginUser = (data) => axios.post(`${API_URL}/users/login`, data);
export const getEvents = (token) => {
  console.log(token);
  return axios.get(`${API_URL}/events/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
//create event
export const createEvent = (data, token) =>
  axios.post(`${API_URL}/events/`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const updateEvent = (id, data, token) =>
  axios.put(`${API_URL}/events/${id}`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const deleteEvent = (id, token) =>
  axios.delete(`${API_URL}/events/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const getWeather = (location) =>
  axios.get(`${API_URL}/api/weather/${location}`);
