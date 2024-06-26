import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import { Title } from "@/components/common/Title"
import { Brand } from "@/components/router"
import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DisplayCard from "@/components/DisplayCard"


const Hero = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section className='hero-section'>
      <Slider {...settings}>
          <div>
          <img src="/images/c1.jpg" alt="Image 1" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
          <img src="/images/c2.jpg" alt="Image 2" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
          <img src="/images/c3.jpg" alt="Image 3" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
          <img src="/images/c4.jpg" alt="Image 1" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
          <img src="/images/c5.jpg" alt="Image 2" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
          <div>
          <img src="/images/c3.jpg" alt="Image 3" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </Slider>

        
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='ACME DEVELOPMENT ORGANISATION' className='hero-title' />
            <div className='heading-title-content'>
            <p>ACME Development Organization (ACME) is a vibrant national peace and development organization that was established in December 2019 by a team of seasoned peace and development professionals from within the country. Special emphasis relates to pastoralism and its change mechanisms with affiliate links to other parts of the country in Turkana, Bungoma, Busia and Nairobi counties. ACME was registered on 20th December 2019 as a national NGO vide registration certificate number OP.218/051/19-225/11599.  ACME’s head office is located in Nairobi along Ngong Road at 5th Floor of Applewood Adams at 504. Acme has an office off Lodwar-Kakuma highway next to World Vision offices in Kakuma town and a office in Lodwar town. Our major mandate is to contribute towards community development of the Kenyan community through implementation of development projects in Turkana, Bungoma, Busia and Nairobi counties of Kenya.</p>
          </div>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />      
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <DisplayCard />
    </>
  )
}

export default Hero
