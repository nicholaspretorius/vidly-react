import http from "./http";
import config from "./../config";

const url = `${config.api}/users`;

export async function createUser(data) {
  const user = await http.post(url, data);
  return user;
}
