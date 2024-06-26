import React from "react"
import Link from "next/link"
import { TitleSm, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <TitleSm title='We are looking forward to expand aid' /> <br />
            <TitleLogo title='Enhancing livelihoods together!' />
          </div>
          <div>
          <Link href='/contact'>
            <button className='button-primary'>Request a call-back</button>
          </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
