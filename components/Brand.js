import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Brand = () => {

  const settings =  {
    dots: true,
    infinite: true,
    speed: 500,    
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
  };
    
  return (
    <>
      <section className='brand'>
        <div className='container'>
         <div className='heading-title'>
            <Title title='OUR PARTNERS' />
          </div>
    <Slider {...settings}>
           {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} />
              </div>
            ))}
    </Slider>     
        </div>
      </section> 
    </>
  )
}

export default Brand
