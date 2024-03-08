import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='WHO WE ARE' /> <br />
            <br />
            <Title title='Aiding communities in need' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Our Goal' />
              <p className='desc-p'>Acme’s main goal is to contribute towards resolution of the inherent problems that affect the poorest of the poor among them nomadic pastoralists and vulnerable and marginalized groups. These inherent problems are manifested in conflicts, poverty, and inadequate access to water, sanitation and hygiene and a degraded environment.</p>
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
              <img src='/images/a1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/community.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>ACME targets vulnerable and marginalized members of the community. Also, ACME targets street children/families, displaced persons, and refugees across Kenya - with the aim of alleviating them from poverty and other undignified living conditions. Additionally, ACME seeks to empower multi-dimensionally poor through physical development, nutrition, health, education, child protection, information, water, sanitation and housing. ACME’s current constituency covers Turkana West Sub-County.</p>
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
  )
}

export default Agency
