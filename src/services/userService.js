import http from "./http";
import { apiURL } from "../config/default.json";

const apiEndpoint = apiURL + "/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}
