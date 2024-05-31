import { Blog } from "@/sections"
import PageLoader from "next/dist/client/page-loader"
import Head from "next/head"

const Blogs = () => {
  return (
    <>
      <Head>
        <title>Blog - acmekenya.org</title>
      </Head>
      <Blog />
    </>
  )
}

export default Blogs
