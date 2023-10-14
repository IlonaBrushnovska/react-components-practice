import React from "react";

function Heading() {
  const currentTime = new Date().getHours();
  var greeting = "";
  const colorGreeting = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good morning";
    colorGreeting.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good afternon";
    colorGreeting.color = "green";
  } else {
    greeting = "Good evening";
    colorGreeting.color = "blue";
  }

  return (
    <h1 className="heading" style={colorGreeting}>
      {greeting}
    </h1>
  );
}

export default Heading;
