import { expertise } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SingleService = () => {
  const router = useRouter()
  const { id } = router.query

  const post = expertise.find((post) => post.id === parseInt(id)) 
  
  
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WHAT WE DO' /> <br />
            <br />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='profiles-page'>
              <TitleSm title={post.description} />

            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  )
}

export default SingleService