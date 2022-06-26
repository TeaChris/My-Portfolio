import React from 'react'
import './testemonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    called: 'MRS. Israel Elizabeth',
    review: 'Bolu is a brilliant Techie who works very well to deadline and my clients are always happy with the work he produces. I have worked with Bolu on more then one occassion and he has always been a superb Tech guy.',
  },
  {
    avatar: AVTR2,
    called: 'Ajiboye Michael',
    review: 'When it comes to Computer and Networking, Bolu is my #1 go-to tool. We have been working together for more than 3 years and he is an excellent all round Computer guy.',
  },
  {
    avatar: AVTR3,
    called: 'Olabisi SOA',
    review: 'Bolu is the Senior Web developer for SOA Project and we all have been suprised by how much of tech he knows. Most importantly, the way he handles all Tech duties is a top notch skill, he is the man for all Tech related problems.',
  },
  {
    avatar: AVTR4,
    called: 'Oyabakin Temitope',
    review: 'Bolu has many Tech skill but what I love about him is his commitment to speed, design and innovation. His data is fresh and relevant and granular enought to make very actionable decisions.',
  }
]

const testemonial = () => {
  return (
    <section id='testemonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">
       {
        data.map(({avatar, called, review}, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avater">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{called}</h5>
                  <small className='client__review'>
                    {review}
                  </small>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default testemonial