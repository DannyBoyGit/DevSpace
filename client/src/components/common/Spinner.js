import React from "react";
import spinner from "../../img/Spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
}
