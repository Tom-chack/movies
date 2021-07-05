import http from "./http";
import { apiURL } from "../config/default.json";

const apiEndpoint = apiURL + "/movies";

function movieURL(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMovies() {
  return http.get(apiEndpoint);
}

export function deleteMovie(id) {
  return http.delete(movieURL(id));
}

export async function getMovie(id) {
  return http.get(movieURL(id));
}

export async function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieURL(movie._id), body);
  }
  return http.post(apiEndpoint, movie);
}
