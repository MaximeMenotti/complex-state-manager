import { Middleware } from "redux";

export const logger: Middleware = ({ getState }) => {
  return (next) => (action) => {
    console.log("will dispatch", action);

    const returnValue = next(action);

    console.log("state after dispatch", getState());
    return returnValue;
  };
};
