import {
  GET_CONTROLS,
  SIMMULATE_ERROR,
  LOADING_CONTROLS,
} from "../constants/action-types";
import { getControlsList } from "../middleware/api";

const initialState = {
  controls: undefined,
  isError: false,
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTROLS:
      return Object.assign({}, state, {
        controls: getControlsList(),
        isError: false,
        loading: false,
      });

    case SIMMULATE_ERROR:
      return Object.assign({}, state, {
        controls: {},
        isError: true,
        loading: false,
      });

    case LOADING_CONTROLS:
      return Object.assign({}, state, {
        controls: {},
        isError: false,
        loading: true,
      });

    default:
      return state;
  }
}

export default rootReducer;
