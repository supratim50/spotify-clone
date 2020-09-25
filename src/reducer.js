export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQC5-gYdSVJny8WGDLwfhZoZ_OUxFG4cYor2_Lymxm5SY8XNTfjwtxcJ-BR1ZsGQ_KsDya06HFrPxfNlrUWVfdcdHj66VWwBcYmftkkb8J9TU8qq8MrjeupkgdZhWeRAy0E7LhrsngSqWCK_Zg-G4QvJJZqJNVKzzxscPxMHFLlvVt9JlZqy",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
