import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"
import { redirect } from "next/dist/server/api-utils"
import { redirects } from "@/next.config"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Vision' />
            <p>An Empowered and Dignified Society.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='Join us' path={'/contact'} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
