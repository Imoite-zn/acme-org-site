import { board } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Team = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='MEET OUR BOARD' /> <br />
            <br />
            <Title title='A team of smart & passionate creatives' className='title-bg' />
          </div>
          <div className='grid-4 py'>
            {board.map((item) => (
              <Card data={item} key={item.id} caption={item.role} path='profiles' />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
