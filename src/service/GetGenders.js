import {API_KEY, BASE_URL} from '../utilities/constant';

export function GetResponseGender(response) {
  const {genres} = response;

  return genres;
}

export default function GetGenders() {
  return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`)
    .then(res => res.json())
    .then(GetResponseGender);
}
