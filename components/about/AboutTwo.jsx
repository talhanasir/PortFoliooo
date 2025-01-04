import Social from "../Social";
import Testimonials from "../testimonial/Testimonial";
import Services from "../service/Service";
import Awards from "../award/Awards";
import Image from "next/image";

const AboutTwo = () => {
  return (
    <>
      <section
        id="about"
        className="section theme-light dark-bg scrollSpysection"
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 col-lg-4">
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <Image
                      width={626}
                      height={630}
                      style={{ height: "fit-content" }}
                      src="/img/about/pic.jpg"
                      alt="about"
                    />
                  </div>
                  <Social />
                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Web Developer</p>
                  <h3>Muhammad Talha</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div className="col-lg-7 ml-auto">
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>
                <div className="about-text">
                  <p>
                  I'm a passionate front-end developer with a talent for crafting visually appealing and user-friendly web applications. With expertise in React.js, TypeScript, and modern CSS frameworks, I specialize in creating seamless user interfaces and enhancing user experiences.
                  </p>
                  <p>
                  I excel in building responsive, dynamic, and scalable applications, ensuring cross-browser compatibility and optimal performance. I have a keen eye for detail and a deep understanding of state management, API integrations, and single-page applications (SPAs). Collaborating with designers and backend developers, I ensure a cohesive and polished product from concept to deployment.

Driven by a commitment to innovation, I stay updated on the latest front-end trends and technologies to deliver cutting-edge solutions. When not coding, I enjoy exploring new technologies, playing pickleball, and spending time with family and friends.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Muhammad Talha</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>9th Oct, 1995</span>
                        </li>
                        <li>
                          <label>Age: </label>
                          <span>29 years</span>
                        </li>
                        <li>
                          <label>Address: </label>
                          <span>Ashburn, VA</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span>(+1) 571 587 6565</span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span>talhanasir.tn@gmail.com</span>
                        </li>
                        <li>
                          <label>Skype: </label>
                          <span>talhawk</span>
                        </li>
                        <li>
                          <label>Freelance: </label>
                          <span>Available</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>
          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>
          <Services />
          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Awards.</h3>
          </div>
          <Awards />
          {/* End Awards */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${"/img/border-dark.png"})`,
            }}
          ></div>
          {/* End separated */}

          <div className="title">
            <h3>Testimonials.</h3>
          </div>
          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default AboutTwo;
