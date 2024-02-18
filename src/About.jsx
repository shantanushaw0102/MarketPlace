import React from "react";
import img3 from "./assets/img3.jpg";
import aboutImg from "./assets/aboutImg.jpg";
import "./styles/about.css";

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="grid grid-two-column">
          <div className="about-image">
            <figure>
              <img src={img3} alt="about-image" className="img-style" />
            </figure>
          </div>

          <div className="company-about">
            <h2>About Us</h2>

            <p>
              Welcome to RentEase, where convenience meets affordability! We are
              a passionate team of college students dedicated to revolutionizing
              the way people access the items they need. Our journey began in
              the halls of academia, where we identified a common challenge: the
              hassle of obtaining seldom-used items without breaking the bank.
            </p>
            <p>
              At RentEase, we believe in the power of sharing resources to make
              life more accessible and sustainable. Our platform connects
              individuals seeking temporary solutions with those willing to lend
              a helping hand, fostering a sense of community and collaboration.
              Whether you're a student on a budget, a professional with
              occasional needs, or someone with extra items to spare, RentEase
              is here to simplify your life.{" "}
            </p>
          </div>
        </div>

		<div className="company-profile">
        <div className="grid grid-three-column">
		
		<div className="history">
            <h2>History</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              voluptatibus totam quos qui vero quisquam cum at repudiandae
              similique laudantium omnis, porro dolores, debitis praesentium
              dicta. Consectetur veritatis inventore odio.
            </p>
          </div>
          <div className="mission">
            <h2>Mission</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              error fugit tenetur et molestias laboriosam, adipisci animi beatae
              reiciendis quod!
            </p>
          </div>
          <div className="services">
            <h2>Services</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, veniam!</p>
          </div>
		</div>
          
        </div>
      </div>

      {/* <div className="agency-about-area ptb-80">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="agency-about-img">
                <img
                  alt="image"
                  loading="lazy"
                  width={707}
                  height={681}
                  decoding="async"
                  data-nimg={1}
                  src="/_next/static/media/agency-about-img.0d3d0b65.jpg"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="agency-about-content">
                <span className="sub-title">About Us</span>
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <div className="bar" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p>
                  Nullam quis ante. Etiam sit amet orci eget eros faucibus
                  tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
                  sodales sagittis magna. Sed consequat, leo eget bibendum
                  sodales, augue velit cursus nunc.Donec vitae sapien ut libero
                  venenatis faucibus tempus.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                    Lorem ipsum dolor sit amet, con se ctetur adipiscing elit.
                    In sagittis eg esta ante, sed viverra nunc tinci dunt nec
                    elei fend et tiram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape2 rotateme">
          <img
            alt="shape"
            loading="lazy"
            width={22}
            height={22}
            decoding="async"
            data-nimg={1}
            src="/_next/static/media/shape2.97b18c7a.svg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="shape3">
          <img
            alt="shape"
            loading="lazy"
            width={28}
            height={28}
            decoding="async"
            data-nimg={1}
            src="/_next/static/media/shape3.4bffeff9.svg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="shape6 rotateme">
          <img
            alt="shape"
            loading="lazy"
            width={21}
            height={20}
            decoding="async"
            data-nimg={1}
            src="/_next/static/media/shape4.0580e2ef.svg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="shape7">
          <img
            alt="shape"
            loading="lazy"
            width={21}
            height={20}
            decoding="async"
            data-nimg={1}
            src="/_next/static/media/shape4.0580e2ef.svg"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="shape8 rotateme">
          <img
            alt="shape"
            loading="lazy"
            width={22}
            height={22}
            decoding="async"
            data-nimg={1}
            src="/_next/static/media/shape2.97b18c7a.svg"
            style={{ color: "transparent" }}
          />
        </div>
      </div> */}
    </>
  );
};

export default About;
