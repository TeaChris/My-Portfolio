import React from 'react'
import './portfolio.css'
import PORT1 from '../../assets/port1.png'
import PORT2 from '../../assets/port2.png'
import PORT3 from '../../assets/port3.png'
import PORT4 from '../../assets/port4.png'
import PORT5 from '../../assets/port5.png'
import PORT6 from '../../assets/port6.png'
const portfolio = () => {
  return (
    <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className="portfolio__items">
        <div className="portfolio__item_image">
          <img src={PORT1} alt="" />
        </div>
        <h3>Comic Website (SOA)</h3>
         <div className="portfolio__item-cta">
          <a href="https://github.com/TeaChirs/Spirits" className='btn' target='_blank'>GitHub</a> 
          <a href="https://aesthetic-buttercream-63d361.netlify.app/index.html" className='btn btn-primary' target='_blank'>Live Demo</a> 
         </div>
      </article>
      <article className="portfolio__items">
        <div className="portfolio__item_image">
          <img src={PORT2} alt="" />
        </div>
        <h3>Comic Website (SOA)</h3>
         <div className="portfolio__item-cta">
          <a href="https://github.com/TeaChirs/Spirits" className='btn' target='_blank'>GitHub</a> 
          <a href="https://aesthetic-buttercream-63d361.netlify.app/index.html" className='btn btn-primary' target='_blank'>Live Demo</a> 
         </div>
      </article>
      <article className="portfolio__items">
        <div className="portfolio__item_image">
          <img src={PORT3} alt="" />
        </div>
        <h3>SPirits Of Africa Website</h3>
         <div className="portfolio__item-cta">
          <a href="https://github.com/TeaChirs/Spirits" className='btn' target='_blank'>GitHub</a> 
          <a href="https://aesthetic-buttercream-63d361.netlify.app/index.html" className='btn btn-primary' target='_blank'>Live Demo</a> 
         </div>
      </article>
      <article className="portfolio__items">
        <div className="portfolio__item_image">
          <img src={PORT4} alt="" />
        </div>
        <h3>Spirits Of Africa Website</h3>
         <div className="portfolio__item-cta">
          <a href="https://github.com/TeaChirs/Spirits" className='btn' target='_blank'>GitHub</a> 
          <a href="https://aesthetic-buttercream-63d361.netlify.app/index.html" className='btn btn-primary' target='_blank'>Live Demo</a> 
         </div>
      </article>
      <article className="portfolio__items">
        <div className="portfolio__item_image">
          <img src={PORT5} alt="" />
        </div>
        <h3>Spirits Of Africa Website</h3>
         <div className="portfolio__item-cta">
          <a href="https://github.com/TeaChirs/Spirits" className='btn' target='_blank'>GitHub</a> 
          <a href="https://aesthetic-buttercream-63d361.netlify.app/index.html" className='btn btn-primary' target='_blank'>Live Demo</a> 
         </div>
      </article>
      <article className="portfolio__items">
        <div className="portfolio__item_image">
          <img src={PORT6} alt="" />
        </div>
        <h3>Spirits Of Africa Website</h3>
         <div className="portfolio__item-cta">
          <a href="https://github.com/TeaChirs/Spirits" className='btn' target='_blank'>GitHub</a> 
          <a href="https://aesthetic-buttercream-63d361.netlify.app/index.html" className='btn btn-primary' target='_blank'>Live Demo</a> 
         </div>
      </article>
      
    </div>
  </section>
  )
}

export default portfolio