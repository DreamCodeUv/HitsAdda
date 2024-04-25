import React, { useContext, useState } from 'react'
import { Moviedb } from '../dbs/Moviedb'
import '../css/Filter.css'
import { MovieContext } from '../Context/MovieContext';

const FilterBox = () => {
    
    const {cat , setCat} = useContext(MovieContext);
    const { isFilter , setIsFilter} = useContext(MovieContext);


    return (
        <>
            <div className="gilter-box">
                <ul className="filter-ul">
                    {Moviedb.map((value) => {
                           const setFilter = () =>{
                            setCat(value.category);
                            setIsFilter(true);
                            // console.log(cat);
                        }
                        // let cat = value.category;
                        return (
                            <li className="filter-li" onClick={setFilter}>{value.category}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    );

}

export default FilterBox