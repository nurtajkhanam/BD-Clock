import React from "react";

const ClockTime = () => {
  let time = new Date();
  return (
    <div>
      <p>
        The Current Time is : {time.toLocaleDateString()} -{" "}
        {time.toLocaleTimeString()}{" "}
      </p>
    </div>
  );
};

export default ClockTime;
