import { type } from "os";

export type Dispatch=React.Dispatch<IAction>

export interface IState {
    episodes: Array<IEpisode>
    favorites: Array<any>
  }
  export interface IAction {
    type: string;
    payload: Array<IEpisode>|any;
  }

  export interface ITodo {
    text: string;
    complete: boolean;
  }
  export interface IEpisode{
    id: number
    image: string
    name: string
    number: number
    season: number
  }
  export interface IEpisodeProps{
    episodes:Array<IEpisode>,
    store:{state:IState,dispatch:Dispatch}
    favorites:Array<IEpisode>,
    ToggleFavAction:(state:IState,dispatch:Dispatch, episode: IEpisode) => IAction
  }