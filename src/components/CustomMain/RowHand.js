import React from 'react'
import sam from '../../asset/Poster/samplepod.jpeg'


const RowHand = () => {
  return (
    <>
    <div className="card">
            <div className="pos-box">
                <img src={sam} alt="" className="movie-image" />
            </div>
            <div className="detail-box">
                <h1 className="title">Title: Avangers EndGame</h1>
                <h1 className="title">category: marvel</h1>
                <h1 className="title">Language: Hindi</h1>
                <div className="dowlaod">
                    <button className="download-btn">Download</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default RowHand