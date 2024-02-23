import React, { useState } from 'react'

export const Dropdown = () => {

    const [drop,setDrop]=useState(false)

    let dropdown=()=>{
        setDrop(!drop)
        console.log(drop);
    }

  return (
    <>
    <div onClick={dropdown} className='bg-black text-white w-[80px]'>Register</div>
    {drop&& 
    <div className='list-none'>
        <li>Institution</li>
        <li>Income Tax</li>
        <li>Archaeology</li>
        <li>Pilgrim</li>
    </div>
    }
    </>
  )
}
export default Dropdown
