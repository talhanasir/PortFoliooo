const ServiceContent = [
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `With expertise in modern web design principles and technologies, I have a strong track record of creating responsive, user-centric websites and applications. Leveraging tools like HTML5, CSS3, JavaScript (ES6+), React.js, and TypeScript, I design and develop interfaces that prioritize usability and aesthetics. My projects often include dynamic functionality, seamless navigation, and compatibility across devices, ensuring a superior user experience.`,
  },
  {
    icon: "icon-desktop",
    title: "Web Development",
    descriptions: `
Here’s a note highlighting web development experience:

Web Development Experience
I specialize in full-stack web development, creating scalable and efficient applications using modern technologies like React.js, Node.js, Next.js, and TypeScript. My expertise spans front-end development, focusing on responsive and dynamic user interfaces, as well as back-end development with RESTful APIs, Express.js, and Databases. I have successfully developed projects involving user authentication, state management, and API integrations.`,
  },
  {
    icon: "icon-target",
    title: "Seo Marketing",
    descriptions: `I have experience in optimizing websites for search engines, enhancing online visibility, and driving organic traffic. Proficient in keyword research, on-page and off-page SEO, and technical SEO strategies, I focus on improving site rankings on search engine results pages (SERPs). Utilizing tools like Google Analytics, Google Search Console, and SEMrush, I track performance metrics and implement data-driven strategies to boost engagement and conversion rates.`,
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div className="col-md-6 col-lg-4 my-3" key={i}>
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
