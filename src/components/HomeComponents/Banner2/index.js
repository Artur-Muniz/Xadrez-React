import React from 'react'
import Video from "../../../videos/cinematicChess.mp4"
import './style.css'

const Banner2 = () => {
  return (
    <div class="banner2">
      <video autoPlay loop muted><source src={Video} type="video/mp4" /></video>
        <section class="second-page">
            <div class="second-text">
                <h2 class="title-2">SOMOS A SOLUÇÃO PERFEITA <br></br>PARA AS SUAS PARTIDAS!</h2>
            </div>
        </section>
    </div>
  )
}

export default Banner2