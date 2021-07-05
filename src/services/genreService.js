import http from "./http";
import { apiURL } from "../config/default.json";

export function getGenres() {
  return http.get(apiURL + "/genres");
}

export async function getGenre(id) {
  const { data } = await getGenres();
  return data.filter((g) => g._id === id);
}
