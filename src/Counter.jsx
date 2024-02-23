import React, { useState } from 'react'

export const Counter = () => {

const[count,setCount]=useState(0)  

let Increment=()=>{
    setCount(count+1)
}    

let Decrement=()=>{
    if(count == 0 )
    {

    }
    else
    {
        setCount(count-1)
    }
} 
  return (
    <>
    <h3>{count}</h3>
    <div className='flex flex-col justify-center gap-[10px] py-[100px] w-[90px]'>
        <button className='bg-green-400 text-white'onClick={Increment} >Increment</button>
        <button className='bg-green-400 text-white'onClick={Decrement} >Decrement</button>
    </div>
    </>
  )
}
export default Counter
