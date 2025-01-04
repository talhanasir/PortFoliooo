"use client";

import Slider from "react-slick";

import Image from "next/image";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    margin: 30,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const TestimonilContent = [
    {
      imageName: "team-1",
      desc: `Working alongside Talha has been an incredible experience. His expertise in React.js, TypeScript, and front-end development is matched by his willingness to share knowledge and collaborate effectively. Talha consistently delivers clean, efficient code and is always ready to tackle challenges with creative solutions. He’s not just a talented developer but also a supportive teammate who elevates everyone around him.`,
      reviewerName: "Daniyal Aamir",
      designation: "Sr. Frontend Engineer at Trillion technology",
    },
    {
      imageName: "team-2",
      desc: `Talha has been an invaluable asset to our team, demonstrating exceptional front-end development skills and a deep understanding of modern technologies like React.js, Node.js, and TypeScript. His ability to deliver high-quality, user-focused solutions under tight deadlines is unmatched. Talha’s collaborative approach and problem-solving mindset make him not just a developer but a true team player. I highly recommend him for any challenging technical role.`,
      reviewerName: "Syed Zubair",
      designation: "CTO at CoVentech",
    },
    {
      imageName: "team-4",
      desc: `Working with Muhammad was a fantastic experience. Their expertise in React.js, JavaScript, and CSS consistently delivered user-friendly, high-performance interfaces. With a keen eye for detail and a collaborative mindset, they excel at turning complex ideas into seamless designs. I highly recommend them for any front-end development role.`,
      reviewerName: "Rahim Khanzada",
      designation: "Frontend Developer at CoVentech",
    },
  ];

  return (
    <div className="testimonial-wrapper">
      <Slider {...settings}>
        {TestimonilContent.map((val, i) => (
          <div key={i}>
            <div className="testimonial-01 media">
              <div className="avatar">
                <Image
                  width={638}
                  height={690}
                  style={{ height: "fit-content" }}
                  src={`/img/testimonial/${val.imageName}.jpg`}
                  alt="review comments"
                />
              </div>
              <div className="media-body">
                <p>{val.desc}</p>
                <h6>{val.reviewerName}</h6>
                <span>{val.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
