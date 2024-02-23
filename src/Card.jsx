import React from 'react'
import img1 from './scull.jpg'

export const Card = (props) => {
  return (
    <>
    <div className='Design align-middle'>
    <div className='text-[30px]'>{props.Heading}</div>
    <div className='text-[20px]'>{props.Comment}</div>
    <img src={ props.Image } alt="" />
    </div>
    </>
  )
}
export default Card