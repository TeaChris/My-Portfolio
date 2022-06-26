import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const experience = () => {
  return (
    <section id="experience">
    <h5>Skills I Have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>HTML</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>CSS</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>JavaScript</h4>
                    <small className='text__light'>Intermediate</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>Bootstrap</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>Tailwind</h4>
                    <small className='text__light'>Basic</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>React</h4>
                    <small className='text__light'>Intermediate</small>
                  </div>
              </article>
            </div>
      </div>

      {/* =================START OF BACKEND================= */}

      <div className="experience__backend">
      <h3>Other Skills</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>Networking</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>Graphics Designing</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>MS Excel</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>Web3 Enthusiast</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>Computer Engineering</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>

              <article className='experience__details'>
                  <BsPatchCheckFill className='experience__detials-icons' />
                  <div>
                    <h4>Product Design</h4>
                    <small className='text__light'>Experienced</small>
                  </div>
              </article>
            </div>
      </div>
    </div>
  </section>
  )
}


export default experience