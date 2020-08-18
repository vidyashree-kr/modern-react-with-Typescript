import React from 'react'
import {Store} from './Store'
import {ToggleFavAction} from './Actions'
import {IEpisodeProps} from './interfaces'
const EpisodeList=React.lazy<any>(()=>import('./EpisodeList'))

export default function Favorites():JSX.Element {
    const {state,dispatch}=React.useContext(Store)
    const props:IEpisodeProps={
        episodes:state.favorites,
        ToggleFavAction,
        store:{state,dispatch},
        favorites:state.favorites
    }
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
           <div className="episode-layout">
               <EpisodeList {...props}/>
               </div> 
        </React.Suspense>
    )
}
