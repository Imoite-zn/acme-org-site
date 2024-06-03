import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = ({ post }) => {
  // Provide default values in case post is undefined
  const description = post?.description || "To Be The Leading Contributor to Human Aid";

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='WHO WE ARE' /> <br />
            <br />
            <Title title='Aiding communities in need' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Our Goal' />
              <p className='desc-p'>{description}</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>20+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Major Partners</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
