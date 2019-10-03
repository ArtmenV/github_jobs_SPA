import React from "react";
import { JobItem } from "./JobItem.js";
import { Loader } from "./Loader";
import { useSelector } from "react-redux";
import "./JobsList.scss";

//Здесь рендерим наши вакансии. Благодоря новому API Redux-Hooks получаем их.
//Дальше передаем в сингл компонент который отвечает
//только за отображение данных.
//В таких компонентах нужно использовать Prop-types. Т.к. это тестовое задание
//то сделал без них, но в production обязательно нужно их использовать чтобы если новый человек придет,
//мог сразу понять что за данные сюда приходят

export const JobsList = () => {
  const jobsList = useSelector(state => state.JobsReducer.jobs);
  const loading = useSelector(state => state.JobsReducer);

  return loading.loading === true ? (
    <Loader />
  ) : (
    <div className="container justify-content-center col-md-10">
      <ul className="jobs__list">
        {jobsList.map(job => {
          return (
            <li className="jobs__list-item" key={job.id}>
              <JobItem job={job} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
