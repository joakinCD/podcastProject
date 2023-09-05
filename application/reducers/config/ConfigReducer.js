import { SET_NAVIGATION_REDUX, SET_LOADING } from "./ConfigTypes";

const initialState = {
  navigationRedux: "",
  loading: false,
};
const podcastReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVIGATION_REDUX: {
      state.navigationRedux = action.payload.navigationRedux;
      return { ...state };
    }
    case SET_LOADING: {
      state.loading = action.payload.loading;
      return { ...state };
    }
    default:
      return state;
  }
};

export default podcastReducer;
