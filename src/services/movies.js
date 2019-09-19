import http from "./http";
import config from "./../config";

const url = `${config.api}/movies`;

export async function getMovies() {
  const { data: res } = await http.get(`${url}`);
  return res;
}

export async function getMovie(id) {
  const { data: res } = await http.get(`${url}/${id}`);
  return res;
}

export async function deleteMovie(id) {
  const { data: res } = await http.delete(`${url}/${id}`);
  return res;
}

export async function saveMovie(data) {
  const { data: res } = await http.post(`${url}`, data);
  return res;
}

export async function updateMovie(id, data) {
  const { data: res } = await http.put(`${url}/${id}`, data);
  return res;
}
