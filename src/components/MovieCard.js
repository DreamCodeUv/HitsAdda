import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import '../css/Movie.css'
import sam from '../asset/Poster/samplepod.jpeg'

import { MovieContext } from '../Context/MovieContext'
import {Moviedb} from '../dbs/Moviedb'


const MovieCard = () => {
  const {data , setData} = useContext(MovieContext);
  const {mno , setMno} = useContext(MovieContext);

// Navigator between SelectM development phase
  const navigate = useNavigate();
  const onSelect = () => {
    navigate("/selectm");
    setData(this.value.sno);
    setMno();
  }

  // ifreame box

  const shFrame = ()=>{
    
  }

  return(
  Moviedb.map((value)=>{
    return(
   <div key={value.sno}> 
   { value.hits.map((movie)=>{
      return (
        <>
          <div key={movie.Mno}>
          <div className="card">
            <div className="image-box">
              <div className="image-poster">
                <img src={sam} alt="movie" className="poster" />
              </div>
            </div>
            <div className="reffrence">
              <h1 className="title"> <span className="key">Title :</span> <span className="vlaue">{movie.Title}</span> </h1>
              <p className="title"> <span className="key">Language :</span> <span className="vlaue">Hindi</span> </p>
              <h2 className="title"> <span className="key">Industry :</span> <span className="vlaue">{value.category}</span> </h2>
              <h3 className="title"> <span className="key">About :</span> <span className="vlaue">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, voluptas.</span> </h3>
            </div>
            <div className="download-btn">
              <button className="downl" onClick={onSelect} >Download</button>
            </div>
          </div >
          </div>
        </>
      )
    })}
    </div>
  )
  })
);
}

export default MovieCard