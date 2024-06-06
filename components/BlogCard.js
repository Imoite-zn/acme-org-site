import React from "react"
import { Card } from "./common/Card"
import { brand } from "@/assets/data/dummydata"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Link from "next/link";

const BlogCard = () => {

  const settings =  {
    infinite: true,
    speed: 500,    
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToShow: 5,
  };
    
  // Add the hover effect and route the brands to their respective pages
  return (
    <>
        <Slider {...settings} className="py">
           {brand.map((item) => (
              <div className='images' key={item.id} >
              <Link href={'/partners/'+item.id} >
              <div className="p_hover">
              <img src={item.cover} alt={item.id} width='100%' height='auto' />
              </div>
              </Link>
              </div>
            ))}
        </Slider>    
    </>
  )
}

export default BlogCard
