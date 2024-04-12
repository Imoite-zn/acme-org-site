import React from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Brand = () => {
    const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
     <section className='partners-section'>
      <Slider {...settings}>
          <div>
            <img src="/images/d1.jpg" alt="Image 1" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="/images/d2.jpg" alt="Image 2" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="/images/d3.jpg" alt="Image 3" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
         <div>
            <img src="/images/d4.jpg" alt="Image 1" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="/images/d5.jpg" alt="Image 2" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
            <img src="/images/d6.jpg" alt="Image 3" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </Slider>

        
      </section>
     /* <section className='brand'>
        <div className='container'>
         <div className='heading-title'>
            <Title title='OUR PARTNERS' />
          </div>
          <div className='brand-content grid-6 py'>
            {brand.map((item) => (
              <div className='images' key={item.id}>
                <img src={item.cover} alt={item.id} width='100%' height='auto' />
              </div>
            ))}
          </div>
        </div>
      </section> */
    </>
  )
}

export default Brand
