import { useHotkeys } from "react-hotkeys-hook";
import ShorcutDisplay from "./ShortcutDisplay";
import { ActionCreators } from "redux-undo";
import { useDispatch } from "react-redux";

function HotKeys() {
  const dispatch = useDispatch();
  useHotkeys(["Control+z", "Meta+z"], () => dispatch(ActionCreators.undo()));
  useHotkeys(["Control+y", "Meta+Shift+z"], () =>
    dispatch(ActionCreators.redo())
  );

  return (
    <div className="flex gap-4 m-4">
      <ShorcutDisplay keys={["⌘", "z"]} label="Undo" />
      <ShorcutDisplay keys={["⌘", "⇧", "z"]} label="Redo" />
    </div>
  );
}

export default HotKeys;
