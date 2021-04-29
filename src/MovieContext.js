import React, { useState, createContext } from "react";

export const MovieContext = createContext(); //Iniitiate context

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "harry porter",
      price: "$10",
      id: 234,
    },
    {
      name: "kick",
      price: "$30",
      id: 235,
    },
    {
      name: "hero",
      price: "$90",
      id: 236,
    },
  ]);

  return (
//     <MovieContext.Provider value={"hii"}>
    <MovieContext.Provider value={[movies,setMovies]}>

      {/* <Nav />
      <MovieList /> */}
{/* both syntax are same */}.

      {props.children}
    </MovieContext.Provider>
  );
};
