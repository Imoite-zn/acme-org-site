import React from "react"
import { Card } from "./common/Card"
import { brand } from "@/assets/data/dummydata"

const BlogCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
        {brand.map((item) => (
          <Card data={item} key={item.id} path='partners' />
        ))}
      </div>
    </>
  )
}

export default BlogCard
