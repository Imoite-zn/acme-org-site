import { brand } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SinglePartner = () => {
  const router = useRouter()
  const { id } = router.query
  const post = brand.find((post) => post.id === parseInt(id))
  
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
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='30%' height='40%' />
            </div>
            <div className='desc'>
              <TitleSm title={post.description} />
            </div>
          </div>
          <Banner />
        </div>
        <br />
      </section>
    </>
  )
}

export default SinglePartner
