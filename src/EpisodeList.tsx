import React from 'react'
import { IEpisode, IAction } from "./interfaces";

export default function EpisodeList(props:any) {
    const{episodes,favorites,ToggleFavAction,store}=props
    const{state,dispatch}=store
    return episodes.map((episode: IEpisode) => {
        return (
          <section key={episode.id} className="episode-box">
            <img src={episode.image} alt={`Online Shows ${episode.name}`} />
            <div>{episode.name}</div>
            <section style={{display:'flex',justifyContent:'space-between'}}>
              <div>
                Season:{episode.season} Number:{episode.number}
              </div>
              <button type="button" onClick={() => ToggleFavAction(state,dispatch,episode)}>
                {favorites.find((fav:IEpisode)=> fav.id===episode.id) ? 'UNFAV':'FAV'}
              </button>
            </section>
          </section>
        );
      })
}
