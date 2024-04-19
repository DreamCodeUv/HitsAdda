 import React,{Children, createContext, useState} from "react";


 // this is my context
 const MovieContext = createContext();

//  provider

const MovieProvider =({children})=>{
    const [data , setData] = useState(0);
    const [mno , setMno] = useState(0);
    return(
        <MovieContext.Provider value ={{data , setData, mno , setMno}}>
        {children}
        </MovieContext.Provider>
    )
    
}


export {MovieContext , MovieProvider}

