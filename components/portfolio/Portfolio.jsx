"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { useEffect, useState } from "react";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "CorpComments", "Evento", "Classification using ANN"];
const tabListContent = [
  
  {
    categories: ["CorpComments"],
    img: "/img/portfolio/m-portfolio-2.jpg",
    width: 400,
    height: 400,
    title: "CorpComment",
    subTitle: "React JS, Html, CSS, Vercel",
    alterText: "Give Feedback",
    portfolioLink:
      "https://corp-comment-22nf.vercel.app/",
  },
  {
    categories: ["Classification using ANN"],
    img: "/img/portfolio/m-portfolio-3.jpg",
    width: 400,
    height: 700,
    title: "Classification using Artificial Neural Network",
    subTitle: "RStudio, Tensorflow, Pyspark",
    alterText: "ANN",
    portfolioLink:
      "https://github.com/talhanasir/Classification-using-Artificial-Neural-Network",
  },
  {
    categories: ["Evento"],
    img: "/img/portfolio/m-portfolio-1.jpg",
    width: 400,
    height: 550,
    title: "Evento",
    subTitle: "Next JS, React JS, Vercel",
    alterText: "Events around you",
    portfolioLink:
      "https://evento--rosy.vercel.app/",
  },
  
];

const Portfolio = () => {
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const [filteredItems, setFilteredItems] = useState(tabListContent);
  useEffect(() => {
    if (currentTab == "All") {
      setFilteredItems(tabListContent);
    } else {
      const filtered = [
        ...tabListContent.filter((elm) => elm.categories.includes(currentTab)),
      ];
      setFilteredItems(filtered);
    }
  }, [currentTab]);

  return (
    <div className="portfolio-filter-01">
      <div className="filter d-flex flex-wrap justify-content-start gap-3">
        {tabList.map((val, i) => (
          <div
            key={i}
            onClick={() => setCurrentTab(val)}
            className={` portfolio-tab ${
              currentTab == val ? "active" : ""
            } fs-6" key={i}`}
          >
            {val}
          </div>
        ))}
      </div>
      {/* End tablist */}
      <Gallery>
        <div className="portfolio-content ">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredItems.map((val, i) => (
              <div className="portfolio-box-01" key={i}>
                <div className="portfolio-img">
                  <div className="portfolio-info">
                    <h5>
                      <a
                        href={val.portfolioLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {val.title}
                      </a>
                    </h5>
                    <span>{val.subTitle}</span>
                  </div>
                  {/* End .portfolio-info */}
                  <Item
                    original={val.img}
                    thumbnail={val.img}
                    width={val.width}
                    height={val.height}
                  >
                    {({ ref, open }) => (
                      <div className="gallery-link">
                        <Image
                          width={400}
                          height={700}
                          style={{ height: "fit-content" }}
                          src={val.img}
                          alt="Childhood"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      </div>
                    )}
                  </Item>

                  <a
                    className="portfolio-icon"
                    href={val.portfolioLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FiLink />
                  </a>
                  {/* End .portfolio-icon */}
                </div>
              </div>
            ))}
          </Masonry>
        </div>
        {/* End list wrapper */}
      </Gallery>
      {/* End tabpanel */}
    </div>
  );
};

export default Portfolio;
