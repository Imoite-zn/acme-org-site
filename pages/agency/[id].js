import { agency } from "@/assets/data/dummydata"
import Head from "next/head"
import { useRouter } from "next/router"
import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import { Title, TitleSm } from "@/components/common/Title"


const AgencyPage = () => {
  const router = useRouter()
  const { id } = router.query
  const post = agency.find((post) => post.id === parseInt(id))
  
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='WHO WE ARE' /> <br />
            <br />
            <Title title='Aiding communities in need' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60y p'>
              <TitleSm title={post.title} />
              <p className='desc-p'>{post.description}</p>
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
              <img src={post.cover} alt={post.title} className='round' width='100%' height='100%' objectFill='contain' />
            </div>
          </div>
          <div className='left w-40 py'>
            <br>
            </br>
          <p className='desc-p'>{post.extra}</p>
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

export default AgencyPage
