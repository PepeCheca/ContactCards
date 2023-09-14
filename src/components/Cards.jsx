import React from "react";
import Card from "./Card";

// Importamos las imágenes
import img1 from '../assets/git1.jpg'
import img2 from '../assets/git2.jpg'
import img3 from '../assets/linkedin1.jpg'
import img4 from '../assets/linkedin2.jpg'

// Importamos los estilos
import './cards.css'

const cards = [
  {
    id: 1,
    title: 'GitHub de Pepe',
    image: img1,
    url: 'https://github.com/PepeCheca?tab=repositories',
    text: '¡Bienvenido a mi perfil de GitHub! Aquí encontrarás más de mis repositorios creados con la tecnología que he aprendido. 💻🐱‍👓 ¿Por qué no le echas un vistazo? 👀'
  },
  {
    id: 2,
    title: 'LinkedIn de Pepe',
    image: img3,
    url: 'https://www.linkedin.com/in/pepecheca/',
    text: '¡Bienvenido a mi perfil de LinkedIn! Aquí encontrarás más información acerca de mi. Mi experiencia profesional, formación, certificados, etc. 🧐🔍'
  },
  {
    id: 3,
    title: 'GitHub de Javi',
    image: img2,
    url: 'https://github.com/jvdelafuente?tab=repositories',
    text: '¡Bienvenido al perfil de GitHub de Javi! Aquí encontrarás más de sus repositorios creados con la tecnología que ha aprendido. 💻🐱‍👤 ¿Por qué no le echas un vistazo? 👀'
  },
  {
    id: 4,
    title: 'LinkedIn de Javi',
    image: img4,
    url: 'https://www.linkedin.com/in/javiergarciadelafuente/',
    text: '¡Bienvenido al perfil de LinkedIn de Javi! Aquí encontrarás más información acerca de él. Su experiencia profesional, formación, certificados, etc. 😎🔍'
  }
]

function Cards() {
  return(
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {
          cards.map(card => (
                <div className="col-md-3" key={card.id}>
              <Card title={card.title} image={card.image} url={card.url} text={card.text}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}
export default Cards