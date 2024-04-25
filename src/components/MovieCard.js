import React, { useContext } from 'react'
import { Moviedb } from '../dbs/Moviedb'

import '../css/Movie.css'
import MCardCls from './CustomMain/MCardCls'


const MovieCard = () => {
  return (
    <>
      <div className="movies-grid">
        {
          Moviedb.map((value) => {
                return (
                  <MCardCls />
                )
          }
          )
          // <MCardCls sno={value.sno}/>
        }
      </div>
    </>
  )
}

export default MovieCard