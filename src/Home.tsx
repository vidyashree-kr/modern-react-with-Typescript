import React, { Fragment, useContext, useEffect }  from 'react'
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import {ToggleFavAction,fetchDataAction} from './Actions'
const EpisodeList=React.lazy<any>(()=>import('./EpisodeList'))


export default function Home():JSX.Element {
    const { state, dispatch } = useContext(Store);
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });
  
  const props:IEpisodeProps={
    episodes:state.episodes,
    favorites:state.favorites,
    store:{state,dispatch},
    ToggleFavAction
  }
    return (
        <Fragment>
        <React.Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props}/>
      </section>
      </React.Suspense>
    </Fragment>
    )
}
