import React from "react";
import "./ControlItem.scss";

function ControlsList({ controlItem }) {
  return (
    <div className="list-row">
      <div className="control-name-container">
        <div className="control-name">{controlItem.attributes.name}</div>
      </div>
      <div className="control-type">
        <button className="btn-type">{controlItem.attributes.type}</button>
      </div>
      <div className="control-angle">{controlItem.attributes.polar_angle}</div>
      <div className="control-rate">
        {controlItem.attributes.maximum_rabi_rate}
      </div>
      <div className="control-action btn-more-container">
        <button className="btn-more">></button>
      </div>
    </div>
  );
}

export default ControlsList;
