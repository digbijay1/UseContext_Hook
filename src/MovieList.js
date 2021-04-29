import React,{useState,useContext} from 'react'
import Movie from "./Movie"
import {MovieContext} from "./MovieContext"
// import Nav from "./Nav"
function MovieList() {
  const [movies]=useContext(MovieContext)
    return (
        <div>
          {/* <Nav send={movies.length}/> */}
            {movies.map((movie)=>{
                return <Movie name={movie.name} price ={movie.price} key={movie.id}/>
                
            })}
            {/* <h1>{value}</h1> */}
        </div>
    )
}

export default MovieList
