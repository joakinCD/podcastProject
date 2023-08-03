import { combineReducers } from "redux";

import podcastReducer from "./podcast/podcastReducer";

const rootReducer = combineReducers({
  podcast: podcastReducer
});

export default rootReducer;