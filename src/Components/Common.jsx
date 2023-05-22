import React from "react";
import { Link } from "react-router-dom";
const Common = (props) => {
  return (
    <>
       <section id="header">
      <div className="container-fluid ">
        <div className="row">
        <div className="col-10 mx-auto">
        <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0  mx-auto order-2 order-lg-1">
            <div className="header-content">
              <h1>
                {props.hname}<br></br>
                <strong className="brand-name"> Vtech Ventures</strong>
              </h1>
              <h2 className="my-3">
                We are a team of talented developers creating websites
              </h2>
              <div className="mt-4">
                <Link to={props.visit}>
                  <button className="btn btn-get-started animate__animated animate__fadeInUp">{props.btnname}</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 pt-5">
            <div className="header-image">
              <img
                src={props.imgsrc}
                alt="header-img"
                className="img-fluid animated"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </section>
    </>
  );
};

export default Common;
