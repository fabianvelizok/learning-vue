import config from './config';

export default function getArtists (country) {
  const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${config.API_KEY}&format=json`;

  return fetch(url)
    .then(response => response.json())
    .then(json => json.topartists.artist)
    .catch((error) => {
      console.error(error);
    });
};
