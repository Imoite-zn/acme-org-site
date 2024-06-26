import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Brand = () => {

  const settings =  {
    infinite: true,
    speed: 1000,    
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToShow: 5,
  };
    
  return (
    <>
      <section className='brand'>
        <div className='container'>
         <div className='heading-title'>
            <Title title='OUR PARTNERS' />
          </div>
    <Slider {...settings} className="py">
           {brand.map((item) => (
              <div className='images' key={item.id}>
              <img src={item.cover} alt={item.id} width='100%' height='auto' />
              </div>
            ))}
    </Slider>     
        </div>

      </section> 
    </>
  )
}

export default Brand
