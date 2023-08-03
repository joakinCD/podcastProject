import { SET_LISTADO_PODCAST } from "./podcastTypes";

export const setListadoPodcast = (listadoPodcast) => {
  return (dispatch) => {
    dispatch({
      type: SET_LISTADO_PODCAST,
      payload: {
        listadoPodcast: listadoPodcast
      }
    });
  };
};