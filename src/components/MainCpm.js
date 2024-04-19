import React from 'react'
import MovieCard from './MovieCard'
import '../css/Main.css'
import SelectM from './SelectM'

const MainCpm = () => {
  return (
    <>
      <main>
        {/* <MovieCard /> */}
        <div className="movies-grid">
          <MovieCard />
          {/* <SelectM /> */}
        </div>
      </main>
    </>
  )
}

export default MainCpm