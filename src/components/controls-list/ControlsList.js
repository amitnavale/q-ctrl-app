import React from "react";
import "./ControlsList.scss";

function ControlsList() {
  return (
    <>
      <div className="title">
        <div className="title-text">Controls</div>
        <div className="title-action">
          <button className="btn-add-control" aria-label="add control"></button>
        </div>
      </div>
      <div className="controls-list">
        <div className="list-header">
          <div className="control-name-container">
            <div className="control-title">TITLE</div>
          </div>
          <div className="control-type">TYPE</div>
          <div className="control-angle">POLAR ANGLE</div>
          <div className="control-rate">MAX RABI RATE</div>
          <div className="control-action"></div>
        </div>
        <div className="list-row">
          <div className="control-name-container">
            <div className="control-name">Control Name</div>
          </div>
          <div className="control-type">
            <button className="btn-type">PRIMITIVE</button>
          </div>
          <div className="control-angle">0.05671</div>
          <div className="control-rate">63.1671</div>
          <div className="control-action btn-more-container">
            <button className="btn-more">></button>
          </div>
        </div>
        <div className="list-row">
          <div className="control-name-container">
            <div className="control-name">Control Name</div>
          </div>
          <div className="control-type">
            <button className="btn-type">PRIMITIVE</button>
          </div>
          <div className="control-angle">0.05671</div>
          <div className="control-rate">63.1671</div>
          <div className="control-action btn-more-container">
            <button className="btn-more">></button>
          </div>
        </div>
        <div className="list-row">
          <div className="control-name-container">
            <div className="control-name">Control Name</div>
          </div>
          <div className="control-type">
            <button className="btn-type">PRIMITIVE</button>
          </div>
          <div className="control-angle">0.05671</div>
          <div className="control-rate">63.1671</div>
          <div className="control-action btn-more-container">
            <button className="btn-more">></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ControlsList;
