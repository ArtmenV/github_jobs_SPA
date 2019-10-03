import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SinglePage.scss";

export const SinglePage = () => {
  const job = useSelector(state => state.JobsReducer.singleFile);
  console.log(job, "single job");
  //интересно в Реакте dangerouslySetInnerHTML в замен innerHTML
  return job.map(job => {
    const createText = () => {
      return { __html: job.description };
    };
    const MyComponent = () => {
      return <div dangerouslySetInnerHTML={createText()} />;
    };

    const createUrl = () => {
      return { __html: job.how_to_apply };
    };
    const MyUrl = () => {
      return <div dangerouslySetInnerHTML={createUrl()} />;
    };

    return (
      <div
        className="jumbotron bg-white d-flex flex-column container"
        key={job.id}
      >
        <NavLink to="/" className="text-success">
          <h5>&lt; Back on full list</h5>
          <hr />
        </NavLink>
        <div className="d-flex container">
          <div className="">
            <p>
              {job.type} / {job.location}
            </p>
            <h4 className="display-6  text-primary">{job.title}</h4>
            <hr />
            <MyComponent />
            <p className="lead"></p>
          </div>
          <div>
            <div className="d-flex flex-column logo_card">
              <div className="logo_card-inner">
                <span>{job.company}</span>
              </div>
              <div className="logo_card-inner d-flex justify-content-center">
                <img src={job.company_logo} alt="logo" className="logo" />
              </div>
              <div className="logo_card-inner">
                <a href={job.company_url}>{job.company_url}</a>
              </div>
            </div>

            <div className="logo_card">
              {" "}
              <div className="logo_card-inner">
                <strong>How to apply</strong>
              </div>
              <div className="logo_card-inner">
                <MyUrl />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};
