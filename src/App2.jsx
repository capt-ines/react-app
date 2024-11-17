import { useState, Fragment, useEffect } from "react";
import "./App.css";

function StudentCard(props) {
  return (
    <>
      <p>Name:{props.name}</p>
      <p>Age:{props.age}</p>
      <p>Student?:{props.isStudent ? "Yes" : "No"}</p>
    </>
  );
}

function Students() {
  return (
    <>
      <StudentCard name="John" age={20} isStudent={true}></StudentCard>
      <StudentCard name="Alice" age={23} isStudent={true}></StudentCard>
      <StudentCard name="Ray" age={30} isStudent={false}></StudentCard>
    </>
  );
}

export default Students;
