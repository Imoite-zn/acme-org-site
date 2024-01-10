import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section className='hero-section'>
      <Slider {...settings}>
          <div>
          <img src="/images/b2.jpg" alt="Image 1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <img src="/images/b1.webp" alt="Image 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
          <img src="/images/t5.jpg" alt="Image 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </Slider>

        <div className="hero-1">
        <div className='container'>
          <div className='sub-heading'>
            <TitleSm title='' /> <span>.</span>
            <TitleSm title='' /> <span>.</span>
            <TitleSm title='' />
          </div>
        </div>
        </div>
        <div className="hero-2">
        <div className='container'>
          <div className='sub-heading'>
            <TitleSm title='' /> <span>.</span>
            <TitleSm title='' /> <span>.</span>
            <TitleSm title='' />
          </div>
        </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='ACME DEVELOPMENT ORGANISATION' />
            <p>Suspendisse ut magna porttitor, sollicitudin ligula at, molestie dolor. Vivamus a ligula ut velit placerat egestas at id leo. Nulla ac volutpat nunc. Nulla facilisi. Pellentesque tempus tellusut magna porttitor scelerisque.</p>
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
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
