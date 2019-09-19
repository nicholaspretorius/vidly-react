import http from "./http";
import config from "./../config";

const url = `${config.api}/genres`;

export async function getGenres() {
  const { data: res } = await http.get(`${url}`);
  return res;
}

export async function getGenre(id) {
  const { data: res } = await http.get(`${url}/${id}`);
  return res;
}

export async function deleteGenre(id) {
  const { data: res } = await http.delete(`${url}/${id}`);
  return res;
}

export async function saveGenre(data) {
  const { data: res } = await http.post(`${url}`, data);
  return res;
}

export async function updateGenre(id, data) {
  const { data: res } = await http.put(`${url}/${id}`, data);
  return res;
}
