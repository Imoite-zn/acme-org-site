import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brand = () => {
    const settings = {
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
      <section className='brand'>
        <div className='container'>
         <div className='heading-title'>
            <Title title='OUR PARTNERS' />
          </div>
        //  <div className='brand-content grid-6 py'>
        <Slider {...settings}>
         {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='auto' />
              </div>
            ))}
        </Slider>        
        //  </div>
        </div>
      </section> 
    </>
  )
}

export default Brand
