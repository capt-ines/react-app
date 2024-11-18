import { useState, Fragment, useEffect } from "react";
import "./App.css";
import PropTypes from "prop-types";

function StudentCard({ name = "unknown", age = "unknown", isStudent = false }) {
  return (
    <>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Student?:{isStudent ? "Yes" : "No"}</p>
    </>
  );
}

function Students() {
  return (
    <>
      <StudentCard name="John" age={20} isStudent={true}></StudentCard>
      <StudentCard name="Alice" age={23} isStudent={true}></StudentCard>
      <StudentCard name="Ray" age={30} isStudent={false}></StudentCard>
      <StudentCard></StudentCard>
    </>
  );
}

export default Students;
