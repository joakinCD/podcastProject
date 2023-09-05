import { SET_LISTADO_PODCAST } from "./PodcastTypes";

export const setListadoPodcast = (listadoPodcast) => {
  return (dispatch) => {
    dispatch({
      type: SET_LISTADO_PODCAST,
      payload: {
        listadoPodcast: listadoPodcast,
      },
    });
  };
};
