import { combineReducers } from "redux";

import podcastReducer from "./podcast/PodcastReducer";
import configReducer from "./config/ConfigReducer";

const rootReducer = combineReducers({
  podcast: podcastReducer,
  config: configReducer,
});

export default rootReducer;
