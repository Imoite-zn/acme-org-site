import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Agency = ({ post }) => {
  // Provide default values in case post is undefined
  const description = post?.description || "An Empowered and Dignified society";

  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title heading-title-vp'>
            <TitleSm title='WHO WE ARE' /> <br />
            <br />
            <Title title='Aiding communities in need' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Our Vision' />
              <p className='desc-p top-tt'>{description}</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>20+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Major Partners</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <Slider {...settings}>
              <div>
              <img src="/images/event-2.jpg" alt="Image 1" style={{ width: '100%', height: '70vh', objectFit: 'contain' }} />
              </div>
              <div>
              <img src="/images/hero-turks.jpg" alt="Image 2" style={{ width: '100%', height: '70vh', objectFit: 'contain' }} />
              </div>
              <div>
              <img src="/images/f5.jpg" alt="Image 3" style={{ width: '100%', height: '70vh', objectFit: 'contain' }} />
              </div>
              </Slider>
            </div>
            <br>
            </br>
          </div>
          <div className="content flex1">
            <div className='right w-60 py'>
            <div>
              <img src="/images/g3.jpg" alt="Image 1" style={{ width: '100%', height: '60vh', objectFit: 'contain' }} />
              </div>
            </div>
            <div className='left w-40 ml'>
            <TitleSm title='Our Mission' />
            <p className='desc-p'>ACME targets vulnerable and marginalized members of the community. Also, ACME targets street children/families, displaced persons, and refugees across Kenya - with the aim of alleviating them from poverty and other undignified living conditions. Additionally, ACME seeks to empower multi-dimensionally poor through physical development, nutrition, health, education, child protection, information, water, sanitation and housing. ACME’s current constituency covers Turkana West Sub-County.</p>
            </div>
          </div>
          <div className=" content flex1">
              <div className="right w-40 py">
              <TitleSm title='Core Values' />
                  <ul className="core-v-section">
                    <li>
                     I. Integrity
                    </li>
                    <li>
                    II. Professionalism
                    </li>
                    <li>
                    III. Social Justice and Equity
                    </li>
                    <li>
                    IV. Diversity
                    </li>
                    <li>
                    V. Commitment to what we do
                    </li>
                    <li>
                    VI. Accountability
                    </li>
                    <li>
                    VII. Legitimacy
                    </li>
                    <li>
                    VIII. Effectiveness
                    </li>
                  </ul>
              </div>
              <div className="cv-sect left w-60">

              </div>
          </div>
        </div>
      </section>

      <Brand />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
