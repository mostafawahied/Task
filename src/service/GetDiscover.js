import {API_KEY, BASE_URL} from '../utilities/constant';
export function GetResponseDiscover(response) {
  const {results} = response;
  return results;
}

const GetDiscover = pageIndex => {
  const url = new URL(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${pageIndex}`,
  );
  console.log(url.href);
  return fetch(url)
    .then(response => response.json())
    .then(json => {
      return json;
    });
  // .catch(error => Alert.alert('Error', 'Something IS Wrong!'));
};

export default GetDiscover;
