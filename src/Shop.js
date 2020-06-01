import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Shop({ match }) {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(match);

  useEffect(() => {
    setLoading(true);
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setLoading(false);
      console.log(res);
      setPokemon(
        res.data.results.map((p, i) => (
          <div key={i}>
            {" "}
            <Link to={`/shop/${pokemon.pokemonid}`}>
              {" "}
              <h3>{p.name}</h3>
            </Link>
          </div>
        ))
      );
    });
  }, []);

  if (loading) return "Loading...";

  return (
    <div>
      <h1>Shop Page</h1>
      <div>{pokemon} </div>
    </div>
  );
}
