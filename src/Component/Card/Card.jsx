// Card.jsx

import React from "react";
import { useDispatch } from "react-redux";
import { staffattendance } from "../Redux/StaffReducer";
import "./Card.css";

const Card = ({ name, timings, tags, id, tag }) => {
  const dispatch = useDispatch();

  const handleAttendanceInfo = (tag, id) => {
    dispatch(staffattendance({ tag, id }));
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-details">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{timings}</p>
        </div>
        <div className="tags-container">
          <div className="tags-containers">
            {tags.map((tagInfo, index) => (
              <span
                onClick={() => handleAttendanceInfo(tagInfo, id)}
                key={index}
                className={tagInfo === tag ? "tagInfo " : ` tag`}
              >
                {tagInfo}
              </span>
            ))}
          </div>
          <div>
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/ios-glyphs/30/228BE6/circled-chevron-down.png"
              alt="circled-chevron-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
