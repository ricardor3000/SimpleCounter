import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ seconds }) => {
  const [second, setsecond] = useState(seconds);

  function handleAdd() {
    setsecond(second + 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{second}</h2>
      <a href="#" onClick={handleAdd} className="btn btn-primary">
        Incremantar +1
      </a>
    </>
  );
};

Counter.prototype = {
  seconds: PropTypes.number,
};

export default Counter;
