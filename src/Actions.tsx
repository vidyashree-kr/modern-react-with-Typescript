import { IState ,IEpisode,IAction} from "./interfaces";

export const fetchDataAction = async (dispatch:any) => {
    const URL = "http://localhost:3001/episodes";
    const data = await fetch(URL);
    const datJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: datJSON,
    });
  };
 export const ToggleFavAction = (state:IState,dispatch:any,episode: IEpisode |any): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    let dispatchObj = {
      type: "ADD_FAV",
      payload: episode,
    };
    if (episodeInFav) {
      const favWithoutEpisode = state.favorites.filter(
        (fav: IEpisode) => fav.id !== episode.id
      );
      dispatchObj = {
        type: "REMOVE_FAV",
        payload: favWithoutEpisode,
      };
    }
    return dispatch(dispatchObj);
  };