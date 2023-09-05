import { SET_NAVIGATION_REDUX, SET_LOADING } from "./ConfigTypes";

export const setNavigationRedux = (navigationRedux) => {
  return (dispatch) => {
    dispatch({
      type: SET_NAVIGATION_REDUX,
      payload: {
        navigationRedux: navigationRedux,
      },
    });
  };
};
export const setLoading = (loading) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      payload: {
        loading: loading,
      },
    });
  };
};
