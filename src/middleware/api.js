import server from "../server/data.js";
import { TYPE } from "../constants/common-constants";

export const getControlsList = () => {
  return server.data.filter((item) => item.type === TYPE.CONTROLS);
};
