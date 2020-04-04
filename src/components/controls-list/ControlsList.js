import React from "react";
import "./ControlsList.scss";

function ControlsList() {
  return (
    <>
      <div className="title">
        <div className="title-text">Controls</div>
        <div className="title-action">+</div>
      </div>
      <div className="controls-list">
        <div className="list-header"></div>
        <div className="list-row"></div>
      </div>
    </>
  );
}

export default ControlsList;
