import { v4 as uuidv4 } from "uuid";
import Notification from "./Notification";
import { useSelector } from "react-redux";
import { RootState } from "../store";

function Notifications() {
  const alerts = useSelector((state: RootState) => state.alerts.alerts);
  return (
    <div className="toast max-h-1/2">
      {alerts.map((alert) => (
        <Notification key={alert.id} alert={alert} />
      ))}
    </div>
  );
}

export default Notifications;
