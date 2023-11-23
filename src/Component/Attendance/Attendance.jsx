import React, { useEffect, useState } from "react";
import "./Attendance.css";
import cardData from "../Card/Carddata";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  HALFDAY,
  PRESENT,
  ABSENT,
  PAIDHOLIDAY,
  MONTHLYSTAFF,
  STAFF,
  ATTENDANCE,
  REFERRAL,
  PROFILE,
} from "../Config/Config";
import Card from "../Card/Card";

function Attendance() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const data = useSelector((state) => state.staff);
  const navigate = useNavigate();

  const intialTagNum = {
    Present: ["x", "y", "z"],
    "Half-Day": [],
    Absent: [],
  };

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  const [tagCount, setTagCount] = useState(intialTagNum);

  useEffect(() => {
    const updatedTagCount = { ...intialTagNum };

    data.map((info, index) => {
      if (updatedTagCount.hasOwnProperty(info.tag)) {
        updatedTagCount[info.tag].push(info.tag);
      }
    });

    setTagCount(updatedTagCount);
  }, [data, cardData]);

  
  const handleNextDate = () => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setCurrentDate(nextDate);
  };

  const handlePrevDate = () => {
    const prevDate = new Date(currentDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setCurrentDate(prevDate);
  };

 

  const handleNavigate = (path) => {
    navigate(path === "attendance" ? `/${path}` : "/");
  };

  return (
    <div className="outerbox">
      <div className="innerbox">
        {/* Header  */}
        <div className="header">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/50/228BE6/circled-left-2.png"
            alt="circled-left-2"
            onClick={handlePrevDate}
            style={{ cursor: "pointer" }}
          />
          <p className="text1">{formattedDate}</p>
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios-filled/50/228BE6/circled-right-2.png"
            alt="circled-right-2"
            onClick={handleNextDate}
            style={{ cursor: "pointer" }}
          />
        </div>
        <hr />
        {/* End of Header  */}

        {/* upper text */}
        <div className="data">
          <div className="Details">
            <h6>{PRESENT}</h6>
            <p className="present">{tagCount.Present.length}</p>
          </div>
          <div className="Details">
            <h6>{ABSENT}</h6>
            <p className="Absent">{tagCount.Absent.length}</p>
          </div>
          <div className="Details">
            <h6>{HALFDAY}</h6>
            <p className="Half-day">{tagCount["Half-Day"].length}</p>
          </div>
          <div className="Detail">
            <h6>{PAIDHOLIDAY}</h6>
            <p className="paid-holiday">0</p>
          </div>
        </div>
        <hr />
        {/* End of upper text */}

        {/* Cards */}
        <div className="cardsbox">
          <h4>{MONTHLYSTAFF} </h4>
          <div>
            {cardData.map((data, index) => (
              <Card key={index} {...data} />
            ))}
            {data.map((data, index) => (
              <Card key={data.id} {...data} />
            ))}
          </div>
        </div>
        {/* End of Cards */}

        <div className="section">
          <a href="#" onClick={() => handleNavigate("staff")}>
            <div className="btns">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/windows/32/conference-background-selected.png"
                alt="conference-background-selected"
              />
              <p>{STAFF}</p>
            </div>
          </a>

          <a href="#" onClick={() => handleNavigate("attendance")}>
            <div className="btns">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/ios-filled/50/clock--v1.png"
                alt="clock--v1"
              />
              <p>{ATTENDANCE}</p>
            </div>
          </a>

          <a href="#">
            <div className="btns">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/external-goofy-solid-kerismaker/96/external-Affiliate-marketing-goofy-solid-kerismaker.png"
                alt="external-Affiliate-marketing-goofy-solid-kerismaker"
              />
              <p>{REFERRAL}</p>
            </div>
          </a>

          <a href="#">
            <div className="btns">
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-user-web-and-seo-tanah-basah-basic-outline-tanah-basah.png"
                alt="external-user-web-and-seo-tanah-basah-basic-outline-tanah-basah"
              />
              <p>{PROFILE}</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
