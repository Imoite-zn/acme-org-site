import { members } from "@/assets/data/dummydata"
import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import React from "react"

const Members = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR MEMBERS' /> <br />
            <br />
            <Title title='A team of smart & passionate creatives' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {members.map((item) => (
              <Card data={item} key={item.id} caption={item.role} path='members' className='card-height' />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Members
