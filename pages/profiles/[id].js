import { board, members } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"

const SingleProfile = () => {
  const router = useRouter()
  const { id } = router.query

  var post = board.find((post) => post.id === parseInt(id)) 
  var post = members.find((post) => post.id === parseInt(id))
  
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
            <Title title='Our Team' /> <br />
            <br />
            <Title title={post.role} className='title-bg' />
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

export default SingleProfile