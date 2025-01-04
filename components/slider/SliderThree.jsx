import Particles from "./Particles";

import TextAnim from "./TextAnim";

const sliderContent = {
  name: "Muhammad Talha",
  description: `An experienced developer with a background in both front-end and back-end technologies. With a strong foundation in React.js, Node.js, and TypeScript, I specialize in building dynamic, user-friendly web applications. I am passionate about creating innovative solutions, optimizing performance, and collaborating within agile teams to deliver high-quality products. My diverse technical expertise, combined with a commitment to continuous learning, drives me to stay at the forefront of development trends and best practices.`,
  btnText: "Download Resume",
};

const SliderTwo = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner home-banner-two scrollSpysection"
        style={{
          backgroundImage: `url(${"/img/slider/home-banner-3.jpg"})`,
        }}
      >
        <div className="frame-layout__particles">
          <Particles />
        </div>
        {/* End particle animation */}
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-12">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello, My name is
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextAnim />
                </div>
                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default SliderTwo;
