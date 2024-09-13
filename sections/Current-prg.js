import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Currentprg = ({ post }) => {
  // Provide default values in case post is undefined
  const description = post?.description || "The Cross Border Peace and Resilience Project (CBPRLP) is a two-year initiative focused on addressing the challenges faced by pastoral communities in the Karamoja Cluster, a borderland region in Kenya. The region, known for its arid and semi-arid lands, is highly susceptible to climate change and natural hazards. The project aims to work with communities in Kalobeyei and Letea wards to address the multifaceted challenges arising from climate change and conflicts.";

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
            <TitleSm title='CURRENT PROGRAMMES' /> <br />
            <br />
            <Title title='' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='The Cross Border Peace and Resilience Project supported by Bread for the World' />
              <p className='desc-p top-tt cr-prg-pg'>{description}</p>
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
          <div>
            <ul>
              <li className=" top-tt">
              i.	To enhance the peace and security of the people of Turkana West and Kaabong 
              </li>
              <p className='desc-p desc-bg'>
                    The indicators for the project are:
                    <br></br>
                    1. At least 50% increase in the number of women from Kalobeyei & Letea Wards actively engaged in peace building activities by 2025.
                    <br></br>
                    2. At least 50% increase in the number of potential / actual conflicts in Kalobeyei & Letea Wards successfully resolved by supported peace committees by 2025.
              </p>
              <li className="top-tt ">
                ii.	To enhance the resilience of communities in Turkana West to drought and related disasters
              </li>
              <p className='desc-p desc-bg'>
                    1. At least 50% of the supported farmers in Kalobeyei & Letea Wards establish (group) climate SMART agro enterprises by 2025.
                    <br></br>
                    2. At least 50% of the established agro enterprises engage in diverse alternative climate SMART on farm activities by 2025.

                    Achieving food security and livelihood development among vulnerable households in the semi-arid regions is challenged by water scarcity and climate change. To alleviate the challenges of water scarcity and climate change impacts, farmers are supported to adopt different climate smart agriculture (CSA) practices. These include irrigation agriculture, from cross-sectional sources
                    (Rain water harvesting, Borehole drilling, water pan/dam construction, shallow hand dug wells and springs),  dryland farming, Small and Micro-Enterprises (both livestock, fish and agricultural products) 
              </p>
            </ul>
          
          </div>
          <div className="content flex1">
            <div className='right w-60 py'>
            <div>
              <img src="/images/g3.jpg" alt="Image 1" style={{ width: '100%', height: '60vh', objectFit: 'contain' }} />
              </div>
            </div>
            <div className='left w-40 ml'>
            <TitleSm title='CROSS BORDER COMMUNIT RESILIENCE ACTIVITY' />
                <p className='desc-p cr-prg-pg'><br></br>The project is titled: Expanding and Strengthening Cross-Border Livelihoods, Natural Resources Management and Supporting Policy Advocacy for Pastoral Communities in Kapoeta-Lokichoggio Corridor through CBCR Activity
                The project on Community Resilience Through Risk Reduction is an all-inclusive resilience focussed project with specifics on expanding livelihoods and creating employment opportunities, Natural Resource Management and Advocacy on relevant policies for the rights of women/girls at risk. 
              </p>
            </div>
          </div>
          <div>
            <ol className="cr-pg-lst">
              <div className=" top-tt">
              The project’s objectives are: 
              </div>
              <li>
              Building capacity for locally led and managed programming.
              </li>
              <li >
              Strengthening social cohesion as a foundation for resilience programming.
              </li>
              <li >
              Inclusive livelihood & employment opportunities in cross-border areas.
              </li>
              <li>
              Improving conflict-sensitive management and equitable sharing of natural resources.
              </li>
              <li>
              Enhancing collaboration and learning across all activities and investments inclusive of cluster stakeholders.
              </li>
            </ol>
          </div>
          <div>
            <p className='desc-p cr-prg-pg desc-bg'>
            The project aims to increase community resilience in the Lokichoggio-Kapoeta cross-border region through capacity-building, livelihood expansion, and partnership development. It will focus on establishing sustainable mechanisms for resource sharing, drawing on proven strategies and prioritizing inclusive community consultations. The project will mitigate the impact of climatic challenges and foster long-term resilience, with targeted support for women and girls. The outcomes include increased resilience to economic benefits, strengthened capacities for climate adaptations, and collaborative advocacy across borders. The project will be implemented in collaboration with the Organization for Peace, Relief and Development, covering a period of 18 months. The geographical area targeted by the project is the cross-border area of Lokichoggio Sub County in Turkana County, Kenya, and Kapoeta East County in Eastern Equatoria State, South Sudan.
            </p>
          </div>
          
              <div className="right py">
              <TitleSm 
              className='bamb-title-sz'
              title='"BAMBOO LIVING": Feasibility study and pilot plantation cultivation, training and awareness raising on the economic, social and environmental benefits of bamboo for refugees in camps and their host communities in Turkana County, Kenya' />
                 
                <p className="desc-p desc-bg">
                The research is taking place in Loima, Turkana Central and Turkana West Sub-Counties of Turkana County. Specific sites include along river Turkwel, Kakuma Refugee Camp and Oropoi Sub- location.
                Duration of the Study: The study is planned for a period of one year for both research and reporting.
                The partners included in the study are Acme Development organization (National NGO), Egerton University and The Polytechnic University of Madrid (SPAIN).
                </p>
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

export default Currentprg;
