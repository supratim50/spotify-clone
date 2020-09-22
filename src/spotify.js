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

// login url
export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
