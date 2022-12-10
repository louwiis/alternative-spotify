import { instance } from "./index";

export function search(query: string, type: string) {
  return instance
    .get("/search", {
      params: {
        q: query,
        type,
      },
    })
    .then((response) => {
      return response.data;
    });
}

export function getAlbum(id : string) {
  return instance.get(`/albums/${id}`).then((response) => {
    return response.data;
  });
}

export function getProfile() {
  return instance.get("/me").then((response) => {
    return response.data;
  });
}

export function getArtist(id: string) {
  return instance.get(`/artists/${id}`).then((response) => {
    return response.data;
  });
}

export function getArtistTopTracks(id: string) {
  return instance
    .get(`/artists/${id}/top-tracks?market=FR`)
    .then((response) => {
      return response.data;
    });
}
