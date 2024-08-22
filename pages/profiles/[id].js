import { board } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const SingleProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  const postId = parseInt(id);
  // let post;

  // if (board.find((post) => post.id === postId)) {
  //   post = board.find((post) => post.id === postId);
  // } else {
  //   post = members.find((post) => post.id === postId);
  // }

  const post = board.find((post) => post.id === postId)

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            
              <Title title="Our Board" />
          
            <br />
            <br />
            <Title title={post.role} className="title-bg" />
            <div className="prof-img py">
              <img src={post.cover} alt={post.title} width="100%" height="80%" className="round" />
            </div>
            <br />
            <Title title={post.title} className="title-bg" />
            <div className="profiles-page">
              <TitleSm title={post.description} />
            </div>
          </div>
          <Banner />
        </div>
      </section>
    </>
  );
};

export default SingleProfile;