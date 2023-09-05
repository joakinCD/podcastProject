import { SET_LISTADO_PODCAST } from "./PodcastTypes";

const initialState = {
  listadoPodcast: [],
};
const podcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTADO_PODCAST: {
      state.listadoPodcast = action.payload.listadoPodcast.slice();
      return { ...state };
    }
    default:
      return state;
  }
};

export default podcastReducer;
