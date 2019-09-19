import http from "./http";
import config from "./../config";

const url = `${config.api}/movies`;

// function getUrl(id) {
//     return `${url}/${id}`;
// };

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
  if (data._id) {
    const body = { ...data };
    delete body._id;
    const { data: res } = await http.put(`${url}/${data._id}`, body);
    return res;
  } else {
    const { data: res } = await http.post(`${url}`, data);
    return res;
  }
}

export async function updateMovie(id, data) {
  const { data: res } = await http.put(`${url}/${id}`, data);
  return res;
}
