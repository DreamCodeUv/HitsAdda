 import React,{Children, createContext, useState} from "react";


 // this is my context
 const MovieContext = createContext();

//  provider

const MovieProvider =({children})=>{
    const [data , setData] = useState(0);
    const [mno , setMno] = useState(0);
    const [cat , setCat] = useState('');
    const [isFilter , setIsFilter] = useState(false);
    return(
        <MovieContext.Provider value ={{data , setData, mno , setMno, cat , setCat}}>
        {children}
        </MovieContext.Provider>
    )
    
}


export {MovieContext , MovieProvider}

