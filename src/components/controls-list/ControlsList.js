import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {
  getControls,
  simulateError,
  loadingControls,
} from "../../actions/index";
import { getState, getError, getLoadingStatus } from "../../selectors/index";
import { LOADING_DELAY_IN_SECONDS } from "../../constants/common-constants";
import ControlItem from "../control-item/ControlItem";
import ErrorModal from "../error-modal/ErrorModal";

import loading from "../../assets/images/loader-blue.gif";
import "./ControlsList.scss";

function ControlsList() {
  const dispatch = useDispatch();

  const controls = useSelector(getState);
  const isError = useSelector(getError);
  const isLoading = useSelector(getLoadingStatus);

  // const [intervalID, setIntervalID] = useState();
  // let intervalID;
  const intervalRef = useRef();
  useEffect(() => {
    dispatch(loadingControls());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      const intervalID = setTimeout(() => {
        dispatch(getControls());
      }, LOADING_DELAY_IN_SECONDS * 1000);

      intervalRef.current = intervalID;

      return () => {
        clearTimeout(intervalRef.current);
      };
    }
  }, [isLoading, dispatch]);

  const onError = () => {
    dispatch(simulateError());
  };

  const onTryAgain = () => {
    dispatch(loadingControls());
  };
  return (
    <>
      {isLoading && (
        <div className="loader-container">
          <img className="loader" src={loading} alt="Logo" />
        </div>
      )}
      {controls && controls.length > 0 && (
        <>
          <div className="title">
            <div className="title-text">Controls</div>
            <div className="title-action">
              <button
                className="btn-add-control"
                aria-label="add control"
              ></button>
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

            {controls.map((item, index) => (
              <ControlItem
                key={`control-item-${index}`}
                controlItem={item}
              ></ControlItem>
            ))}
          </div>
        </>
      )}
      {controls && controls.length === 0 && <div>No Controls found</div>}
      {isError && (
        <div>
          <ErrorModal isOpen={true} onTryAgain={onTryAgain}></ErrorModal>
        </div>
      )}
      <div>
        <button className="btn-error-simulate" onClick={onError}>
          Simulate Error
        </button>
      </div>
    </>
  );
}

export default ControlsList;
