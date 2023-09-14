import React from 'react'

function Card({ title, image, text, url }) {
  return (
    <div className='card text-center bg-dark'>
     <img src={image} alt="" className='card-img-top' />  
      <div className="card-body text-light">
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>{text}</p>
        <a href={url} className='btn btn-outline-secondary rounded-0' target='_blank'>
          Ve a mi perfil
        </a>
      </div>
    </div>
  )
}

export default Card