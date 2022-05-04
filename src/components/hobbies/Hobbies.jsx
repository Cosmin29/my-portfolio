import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination} from "swiper"; 
import './hobbies.css'
import "swiper/css";
import "swiper/css/pagination";
import HOBBY1 from '../../assets/travel.jpg'                                       
import HOBBY2 from '../../assets/ProgrammingIllustration.png'                                       
import HOBBY3 from '../../assets/wp10259559.webp'                                       
import HOBBY4 from '../../assets/4260.webp'
   

const data = [
    {
        hobby: HOBBY1,
        name: 'Travel',
        description: 'I like to travel and meet new people from different cultures.'
    },
    {
        hobby: HOBBY2,
        name: 'Coding',
        description: 'I like to write code every day. I consider it a hobby because it relaxes me and I like what I do.'
    },
    {
        hobby: HOBBY3,
        name: 'Skateboarding',
        description: 'Skateboarding is my first hobby. I do this sport from the age of 8. When I go skateboarding, I feel free to do anything.'
    },
    {
        hobby: HOBBY4,
        name: 'Gaming',
        description: 'After work, in my free time, I like to play computer games with friends.'
    },
]

const Hobbies = () => {
    return (
        <section id='hobbies'>
            <h5>What I Like To Do</h5>
            <h2>Hobbies</h2>

            <Swiper className="container hobbies_container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{clickable: true}}>

               {
                   data.map(({hobby, name, description}, index) => {
                        return (
                            <SwiperSlide key={index} className="hobby">
                            <div className="hobby_photo">
                                <img src={hobby} alt='' />
                            </div>
                            <h5 className="hobby_name">{name}</h5>
                            <small className="hobby_description">{description}</small>
                            </SwiperSlide>
               
                        )
                   })
               }
            </Swiper>
        </section>
    )
}

export default Hobbies