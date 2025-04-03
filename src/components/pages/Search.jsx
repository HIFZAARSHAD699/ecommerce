import React from 'react'
import { useState } from 'react'
import { Data } from './Data'



const Search = () => {
    const [store,setStore]=useState(Data)
    const [data, setData]=useState("")
  const getdata=(event)=>{
     console.log(event.target.value);
     setData(event.target.value)
    }

    let filterOut = store.filter((curValue)=>{
return curValue.name.toLowerCase().includes(data)
    })
    
  return (
    <>
    {filterOut.map((cur)=>{
        return (
            <div className='flex justify-items-normal'>
            <p>{cur.price}</p>
            <p>{cur.name}</p>
            <img src={cur.image} />
            </div>
        )
    }
)}
    </>
  )
}

export default Search