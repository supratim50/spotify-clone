// auth end point
export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000"; // redirect uri
const clientId = "3c999fbe2dc84aa6bf36c20f9ee8a5fb"; // client id

// scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]); // decodeURIComponent use for get the url like: example.com/q=something&helo=something

      return initial;
    }, {});
};

// login url
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
