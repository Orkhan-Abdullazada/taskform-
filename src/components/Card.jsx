import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Card = () => {
    const [data,setData]=useState([])
     useEffect(()=>{
        axios.get(`https://www.omdbapi.com/?s=harry&apikey=6fe78d25`)
        .then(res=>setData(res.data.Search))
     },[])
  return (
    <div className='Cards'>
   
    {
        data && data.map(item=>(
            <div class="card" style={{width:"18rem"}}>
            <img src={item.Poster} alt="..."/>
            <div class="card-body">
              <h5 class="card-title"><h3>{item.Title} </h3></h5>
              <p class="card-text">   {item.Year}</p>
                  <p>{item.Type}</p>
              
            </div>
          </div>
          
        ))
    }


    </div>
  )
}

export default Card