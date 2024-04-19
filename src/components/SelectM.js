import React, { useContext } from 'react'
import mp from '../asset/Poster/samplepod.jpeg'
import '../css/Movie.css'
import { NavLink } from 'react-router-dom'
import { MovieContext } from '../Context/MovieContext'

const SelectM = () => {
    const {data} = useContext(MovieContext);
    const {mno} = useContext(MovieContext);
    return (
        <>
        <div className="movies-grid">
            <h1>{data}</h1>
            <h1>{mno}</h1>
            <div className="movie-seo-box">
                <div className="movie-box">
                <h3 className="movie-seo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius animi iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores aliquid magni provident, amet, quia architecto iste consequatur assumenda soluta harum, dolorum quae dignissimos doloremque in corrupti porro. Pariatur, laboriosam vitae nam dolor quod aliquam porro eaque iusto velit atque doloribus aspernatur hic omnis.</h3>
                </div>
                <div className="movie-box">
                <h3 className="movie-seo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius animi iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores aliquid magni provident, amet, quia architecto iste consequatur assumenda soluta harum, dolorum quae dignissimos doloremque in corrupti porro. Pariatur, laboriosam vitae nam dolor quod aliquam porro eaque iusto velit atque doloribus aspernatur hic omnis.</h3>
                </div>
                <div className="movie-box">
                <h3 className="movie-seo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius animi iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores aliquid magni provident, amet, quia architecto iste consequatur assumenda soluta harum, dolorum quae dignissimos doloremque in corrupti porro. Pariatur, laboriosam vitae nam dolor quod aliquam porro eaque iusto velit atque doloribus aspernatur hic omnis.</h3>
                </div>
            </div>
            <div className="movie-container">
                <div className="movie-top">
                    <img src={mp} alt="Movie title" className="movie-poster" />
                </div>
                <div className="reffrence">
                    <h1 className="title"> <span className="key">Title :</span> <span className="vlaue">Avangers</span> </h1>
                    <p className="title"> <span className="key">Language :</span> <span className="vlaue">Hindi</span> </p>
                    <h2 className="title"> <span className="key">Industry :</span> <span className="vlaue">Marvel</span> </h2>
                    <h3 className="title"> <span className="key">About :</span> <span className="vlaue">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, voluptas.</span> </h3>
                </div>
            </div>
            <div className="movie-seo-box">
            <div className="movie-box">
            <h3 className="movie-seo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius animi iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores aliquid magni provident, amet, quia architecto iste consequatur assumenda soluta harum, dolorum quae dignissimos doloremque in corrupti porro. Pariatur, laboriosam vitae nam dolor quod aliquam porro eaque iusto velit atque doloribus aspernatur hic omnis.</h3>
            </div>
            <div className="movie-box">
            <h3 className="movie-seo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius animi iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores aliquid magni provident, amet, quia architecto iste consequatur assumenda soluta harum, dolorum quae dignissimos doloremque in corrupti porro. Pariatur, laboriosam vitae nam dolor quod aliquam porro eaque iusto velit atque doloribus aspernatur hic omnis.</h3>
            </div>
            <div className="movie-box">
            <h3 className="movie-seo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius animi iste! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus asperiores aliquid magni provident, amet, quia architecto iste consequatur assumenda soluta harum, dolorum quae dignissimos doloremque in corrupti porro. Pariatur, laboriosam vitae nam dolor quod aliquam porro eaque iusto velit atque doloribus aspernatur hic omnis.</h3>
            </div>
            </div>
            <div className="download-btn">
                <NavLink to={'/select'}><button className="downl">Download</button></NavLink>
            </div>
            </div>
        </>
    )
}

export default SelectM