import http from "./http";
import config from "./../config";

const url = `${config.api}/auth`;

export async function login(email, password) {
  return await http.post(url, { email, password });
}
