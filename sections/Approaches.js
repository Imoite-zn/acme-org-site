import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Approaches = ({ post }) => {
  // Provide default values in case post is undefined
  const description = post?.description || "We are a community development organization focused on empowering communities to address their own challenges. Our approach is centered on collaboration, participation, and gender equality.";

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

          <div className='content '>
            <div className='left py'>
              <TitleSm title='Approaches to Community Development' />
              <p className='desc-p top-tt'>{description}</p>
              
            </div>
            <div className=' ml'>
                <p>
                We are a community-centric organization committed to enhancing the lives of community members through strategic collaboration and partnership. Our approach is rooted in Community Driven Development (CDD), emphasizing the active participation of target beneficiaries, particularly marginalized groups like women and youth. By promoting dialogue and addressing root causes of violence, we strive to foster peaceful and inclusive communities.

                To achieve our goals, we operate under the guiding principles of gender sensitivity, rights-based approaches, equity, and "Do no Harm." We employ a people-centered approach, empowering communities to propose solutions and providing platforms for open dialogue. With a dedicated team of experienced professionals and passionate network leaders, we effectively bridge the gap between the organization and the community.

                Our commitment to accountability and transparency is evident in our utilization of Results Based Management and the establishment of a robust grievance redress mechanism. By monitoring progress, gathering feedback, and addressing concerns promptly, we ensure that our programs and initiatives deliver tangible results and meet the needs of the community.
                </p>
          </div>
            <br>
            </br>
          </div>
          <div className="content">
            <div className=' py'>
            <div>
              <img src="/images/g3.jpg" alt="Image 1" style={{ width: '100%', height: '60vh', objectFit: 'contain' }} />
              </div>
            </div>
            <div className='left ml'>
            <TitleSm title='Theory of Change' />
            <div className="thry-of-chang">
            <p className='desc-p '><br></br>Our Theory of Change posits that by empowering communities through sustainable practices, conflict resolution, climate adaptation, improved health, and informed policy, we can foster resilient and thriving communities. We believe that by equipping communities with the tools and knowledge to manage resources, build peace, address health challenges, and influence policies, they will achieve long-term sustainable development and an enhanced quality of life.</p>
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

export default Approaches;
