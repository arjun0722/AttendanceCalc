import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addStaff } from "../Redux/StaffReducer";
import { FULLNAME, MOBILENUMBER } from "../Config/Config";
import { ADD_STAFF, CONTINUE } from "../Config/Config";
import "bootstrap/dist/css/bootstrap.min.css";

import "./staff.css";

const Staff = () => {
  const navigate = useNavigate();
  const intitalStaffInfo = {
    id: "",
    name: "",
    number: "",
    tag: "Present",

    tags: ["Present", "Half-Day", "Absent"],
    timings: "9:00 hrs",
  };

  const dispatch = useDispatch();

  const [staffInfo, setStaffInfo] = useState(intitalStaffInfo);

  const handleEvent = (e) => {
    const { name, value } = e.target;

    setStaffInfo({
      ...staffInfo,
      id: Math.random().toString(36).substring(2),
      [name]: value,
    });
  };

  const handleAddStaff = (e) => {
    if (staffInfo.name !== "" && staffInfo.number !== "") {
      e.preventDefault();
      dispatch(addStaff(staffInfo));
      setStaffInfo(intitalStaffInfo);
    }
  };

  return (
    <div className="outerbox">
      <div className="innerbox">
        <h3>
          <img
            onClick={() => navigate("/attendance")}
            width="32"
            height="32"
            src="https://img.icons8.com/windows/32/right.png"
            alt="right"
          />
          {ADD_STAFF}
        </h3>
        <Form>
          <Form.Group className="mb-4" controlId="formBasicName">
            <Form.Label className="form_label">{FULLNAME}</Form.Label>
            <Form.Control
              name="name"
              value={staffInfo.name}
              onChange={(e) => handleEvent(e)}
              type="text"
              placeholder="Enter Staff Full Name"
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicNumber">
            <Form.Label className="form_label">{MOBILENUMBER}</Form.Label>
            <Form.Control
              name="number"
              value={staffInfo.number}
              onChange={(e) => handleEvent(e)}
              type="number"
              placeholder=" Mobile Number"
            />
          </Form.Group>

          <Button
            onClick={(e) => handleAddStaff(e)}
            className="btn primary"
            variant=""
            type="submit"
            block
          >
            {CONTINUE}
            <img
              width="24"
              height="24"
              src="https://img.icons8.com/material-sharp/24/FFFFFF/right--v1.png"
              alt="right--v1"
            />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Staff;
