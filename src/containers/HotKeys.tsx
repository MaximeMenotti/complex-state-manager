import { useHotkeys } from "react-hotkeys-hook";
import ShortcutDisplay from "../components/ShortcutDisplay";
import { createTimeoutAlert } from "../core/alert/alertSlice";
import { v4 } from "uuid";

function HotKeys() {
  // useHotkeys(["Control+z", "Meta+z"], () => {
  //   dispatch(ActionCreators.undo());

  //   const alert: Alert = {
  //     id: v4(),
  //     message: "Undo",
  //     type: "message",
  //   };
  //   dispatch(createTimeoutAlert(alert));
  // });

  // useHotkeys(["Control+y", "Meta+Shift+z"], () => {
  //   dispatch(ActionCreators.redo());

  //   const alert: Alert = {
  //     id: v4(),
  //     message: "Redo",
  //     type: "message",
  //   };
  //   dispatch(createTimeoutAlert(alert));
  // });

  return (
    <div className="flex gap-4 m-4">
      <ShortcutDisplay keys={["⌘", "z"]} label="Undo" />
      <ShortcutDisplay keys={["⌘", "⇧", "z"]} label="Redo" />
    </div>
  );
}

export default HotKeys;
