import server from "./server/data.js";

export const getControlsList = () => {
    return server.data;
};