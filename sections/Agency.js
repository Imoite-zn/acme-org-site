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
              <img src="/images/f20.jpg" alt="Image 1" style={{ width: '100%', height: '70vh', objectFit: 'contain' }} />
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
            <p className='desc-p'><br></br>ACME exists to organize community members in implementing transformational programs by
            Capacity Building them on initiatives supporting Community Driven Development.</p>
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
                    IV. Participation and Inclusion
                    </li>
                    <li>
                    V. Empowerment
                    </li>
                    <li>
                    VI. Environment Sustainability
                    </li>
                  </ul>
              </div>
              <div className="cv-sect left w-60">

              </div>
          </div>
          <br>
          </br>
          <div className="goal-sect ">
            <div className="g-title-n-content">
            <TitleSm title='Goal' />
            </div>
            <div className="goal-info right">
                <p className="desc-p">
                    ACME aims to contribute towards resolving inherent challenges faced by the most
                    impoverished nomadic pastoralists, vulnerable and marginalized groups. These inherent problems are
                    manifested in conflicts, poverty, and inadequate access to water, sanitation and hygiene, and a
                    degraded environment. The community is mobilised using Community Driven Development as a tool
                    for initiating and owning both government and development partner support.
                    </p>
            </div>
          </div>
          <br></br>
          <div className="obj-section">
                <div className="flex1">
                <div className='right w-60 py'>
                <div>
                  <img src="/images/obj-pg.jpg" alt="Image 1" style={{ width: '100%', height: '60vh', objectFit: 'contain' }} />
                  </div>
                </div>
                <div className='left w-40 ml main-obj'>
                <TitleSm title='Main Objecive' />
                <p className='desc-p'><br></br>
                To promote education, peaceful coexistence, improve agriculture, health awareness, water access,
                sanitation and hygiene and contribute to environmental conservation.
                </p>
                </div>
              </div>
          

              <div className="flex1 mini-flex">
                  <div className="strat-obj-sect left w-50 ml">
                  <div>
                    <TitleSm title='Strategic Objectives' />
                  </div>
                  <ul className="core-v-section strat-obj-lst">
                        <li>
                         To rehabilitate water sources such as boreholes, water pans for domestic and animal use.
                        </li>
                        <li>
                         To facilitate awareness on health, water, sanitation and hygiene in schools and communities.
                        </li>
                        <li>
                         To Facilitate capacity building on conflict transformation and peace building.
                        </li>
                        <li>
                         To promote adaptive agricultural practices for increased food production.
                        </li>
                        <li>
                         To promote afforestation through tree planting both in schools and in the community.
                        </li>
                        <li>
                         To undertake regular conflict analysis, PEA and research and information sharing amongst
                        others to build an evidence base and inform early warning and responses.
                        </li>
                      </ul>
                  </div>
                  <div className="outcms-obj-sect right w-50 ml">
                  <div>
                    <TitleSm title='Outcomes of Objectives' />
                  </div>
                  <ol className="core-v-section">
                        <li>
                         Water Source Rehabilitation: CLEAN WATER AND SANITATION <br></br>

                        • Increased access and sustainable management of water for both domestic and agricultural use.
                        </li>
                        <li>
                         Awareness and Education on health and WASH: PHE & WASH <br></br>

                        • Promotion of awareness on health practices and well being for all.
                        </li>
                        <li>
                         Conflict Transformation and Peacebuilding - PB & CM
                        </li>
                        <li>
                         Promotion of Adaptive Agricultural Practices and sustainable livelihoods: ZERO HUNGER
                        </li>
                        <li>
                         Afforestation Through Tree Planting: NRM FOR CLIMATE CHANGE
                        </li>
                        <li>
                         Provide EWER data and policy review through participatory Research.
                        </li>
                      </ol>
                  </div>
              </div>

          </div>
          <br></br>
        </div>
      </section>
      <div>
      <Brand />
      </div>
     
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
