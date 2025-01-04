import Image from "next/image";

const AwardContnet = [
  {
    img: "a1",
    awardName: "President",
    awardFor: "FAST Photographer's Club",
  },
  {
    img: "a2",
    awardName: "MVP Award",
    awardFor: "CoVentech",
  },
  {
    img: "a3",
    awardName: "Employee of the month Award",
    awardFor: "Feroze1888 Mills",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div className="col-lg-4 m-15px-tb" key={i}>
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <Image
                  width={350}
                  height={350}
                  style={{ height: "fit-content" }}
                  src={`/img/award/${val.img}.png`}
                  alt="award"
                />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
