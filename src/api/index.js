import config from './config';

const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=argentina&api_key=${config.API_KEY}&format=json`;

export default function getArtists () {
  return fetch(url)
    .then(response => response.json())
    .then(json => json.topartists.artist)
    .catch((error) => {
      console.error(error);
    });
};
