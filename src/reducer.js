export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQAMwI7l2eVYcOdXNapQmmAoh6mTt7A4WNxCMcVfA1xD4EgeUGLg2WRdgpF-ED8Vt3RlyIcJQmygkqPesdyuBPZa36zJSgdqs1PR3OALizLWPVgHmcBvKIOu2gMFUBZ8rQLAu8qprCHK8mgNNF6jgLUOB-_tjrWjg5XJOqMqWkeNBBPPN9Ah",
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
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
