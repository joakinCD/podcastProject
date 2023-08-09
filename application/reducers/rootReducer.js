import { combineReducers } from "redux";

import podcastReducer from "./podcast/podcastReducer";
import configReducer from "./config/configReducer";

const rootReducer = combineReducers({
  podcast: podcastReducer,
  config: configReducer
});

export default rootReducer;