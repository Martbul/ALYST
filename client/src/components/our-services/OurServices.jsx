import { Link } from "react-router-dom";
export default function OurServices() {
  return (
    <>
      {" "}
      <section id="service" className="service">
        <div className="container">
          <div
            className="heading_container heading_center"
            style={{ paddingBottom: "4%" }}
          >
            <h2>Our services </h2>
          </div>
          <div className="service-content">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div
                  className="single-service-item"
                  style={{
                    backgroundColor: "#E7ECEF",
                    boxShadow: "0 0 15px 0",
                  }}
                >
                  <div className="single-service-icon">
                  <i class="fa-solid fa-code servicesIcon"></i>
                  </div>
                  <h2>
                    <Link to="/Websitedevelopment">Website Development</Link>
                  </h2>
                  <p>
                    Grow your business online and improve your customer
                    experience
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="single-service-item"
                  style={{
                    backgroundColor: "#E7ECEF",
                    boxShadow: "0 0 15px 0",
                  }}
                >
                  <div className="single-service-icon">
                  <i class="fa-solid fa-mobile servicesIcon"></i>
                  </div>
                  <h2>
                    <Link to="/appDevelopment">App Development</Link>
                  </h2>
                  <p>Make the life of your customers with mobile experience</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div
                  className="single-service-item"
                  style={{
                    backgroundColor: "#E7ECEF",
                    boxShadow: "0 0 15px 0",
                  }}
                >
                  <div className="single-service-icon">
                  <i class="fa-solid fa-sliders servicesIcon"></i>
                  </div>
                  <h2>
                    <Link to="/gptDevelopment">Cutom GPT</Link>
                  </h2>
                  <p>Customize GPT for your company needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/.container*/}
      </section>
    </>
  );
}
