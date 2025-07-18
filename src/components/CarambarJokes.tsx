import { useState } from "react";

function CarambarJokes() {
  const [joke, setJoke] = useState("Prêt à rire ?");

  const fetchJokeRandom = async () => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/api/blagues/random');
    const data = await response.json();
    setJoke(data.content);
  };

  return (
    <section className="joke-box">
      <img src="/blague.jpg" alt="Carambar Rigolo" className="joke-img" />
       {joke && <p className="joke-text">{joke}</p>}
      <button onClick={fetchJokeRandom} className="joke-button">😆 - Découvrir une blague</button>
     
    </section>
  );
}

export default CarambarJokes;