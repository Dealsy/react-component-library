import React from 'react'
import "./Card.css"

export const Card = () => {
  return (
    <div className='card-container'>
      <div className='image'></div> 
      <h1 className='title'>Card Title</h1>
      <p className='description'>Card description/Please add information</p>
      <button className='btn'><a href="" className='tag'>Click Here</a></button>
    </div>
  )
}

