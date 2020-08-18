import React, { Fragment, useContext } from "react";
import "./App.css";
import { Store } from "./Store";
import { Link } from "@reach/router";

type FormElem = React.FormEvent<HTMLFormElement>;

//https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes
function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <Fragment>
      <header className="header">
        <div>
          {" "}
          <h1>Online Shows</h1>
          <p>Pick your favorite Episode</p>
        </div>
        <div>
          <Link to="/">Home</Link><br/>
          <Link to="/faves">Favorite(s): {state.favorites.length}</Link>
          Favorite(s): {state.favorites.length}
        </div>
      </header>
      {props.children}
    </Fragment>
  );
}

export default App;
