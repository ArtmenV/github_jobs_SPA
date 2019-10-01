import React from "react";
import { NavLink } from "react-router-dom";
import "./JobItem.scss";
import moment from "moment";

export const JobItem = ({ job }) => {
  // var today = new Date(); // Получаем текущую дату
  // var endYear = new Date(1995, 11, 31, 23, 59, 59, 999); // Устанавливаем месяц и день на конец года
  // endYear.setFullYear(today.getFullYear()); // Устанавливаем текущий год
  // var msPerDay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одних сутках
  // var daysLeft = (endYear.getTime() - today.getTime()) / msPerDay;
  // var daysLeft = Math.round(daysLeft); // возвращает количество дней, оставшихся до конца года
  // const timeNow = new Date();
  const time = new Date(job.created_at);
  // const daySet = 24 * 60 * 60 * 1000;
  // const day = (timeNow.getTime() - time.getTime()) / daySet;
  // const create_day = Math.round(day);

  // if (create_day === 0) {
  //   return "Today";
  // } else if (create_day < 30) {
  //   return `${create_day} days ago`;
  // } else if (create_day > 30) {
  //   return `${Math.floor(create_day / 30)} months ago`;
  // } else if (create_day / 30 > 12) {
  //   return "more a year ago";
  // }
  const date = moment(time).fromNow();
  // const times = new Date();
  return (
    <div className="container">
      <div className="d-flex p-2 flex__container ">
        <div>
          <NavLink to="">
            <h5>{job.title}</h5>
          </NavLink> 
          <p>
            {job.company}&nbsp;-<strong>&nbsp;{job.type}</strong>{" "}
          </p>
        </div>
        <div className="align-self-end ml-auto">
          {job.location}
          {/* {times} */}
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
