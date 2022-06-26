import React from 'react'
import './services.css'
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>MS Excel</h3>
        </div>

        <ul className="service__list">
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to work on Excel</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to use some complex functions</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to render a well organised data</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to analyse data in the simplest form</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to tackle statics using Excel</p>
          </li>
        </ul>
      </article>
      {/* ========= END OF UI/UX ================== */}

      <article className='service'>
        <div className="service__head">
          <h3>WEB DEVELOPMENT</h3>
        </div>

        <ul className="service__list">
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to interact with the computer in a dynamic way</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to design unique website using HTML, CSS & JS</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to work using backend programming languages (BASICS)</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to test and debug errors</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to create a friendly UI with React</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to use search engine optimization</p>
          </li>
        </ul>
      </article>
      {/* ========= END OF WEB DEVELOPMENT ================== */}

      <article className='service'>
        <div className="service__head">
          <h3>OTHERS</h3>
        </div>

        <ul className="service__list">
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to explain technical matters clearly</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Excelent problem-solving skills</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to logically approach given tasks</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Ability to pay diligent attention to details</p>
          </li>
          <li>
            <BsCheck2All className='service__list-icon'/>
            <p>Strong communication skills</p>
          </li>
        </ul>
      </article>
      {/* ========= END OF CONTENT-CREATION ================== */}
    </div>
  </section>
  )
}

export default Services