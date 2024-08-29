import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

import PrettyJsonDisplay from "./components/PrettyJsonDisplay";
import { addBrick } from "./core/content/contentSlice";
import BrickEditor from "./containers/BrickEditor";
import BrickSelector from "./containers/BrickSelector";
import Button from "./components/Button";
import { v4 as uuidv4, v4 } from "uuid";
import HotKeys from "./containers/HotKeys";
import Notifications from "./containers/Notifications";
import { createAlert, createTimeoutAlert } from "./core/alert/alertSlice";

function App() {
  const content = useSelector(
    (state: RootState) => state.undoableContent.present.value
  );
  const dispatch = useDispatch();

  const addBrickAction = () => {
    dispatch(
      addBrick({
        id: uuidv4(),
        title: "",
        description: "",
        mediaList: [],
      })
    );
  };

  return (
    <>
      <HotKeys />
      <div className="grid grid-cols-2 w-full p-4">
        <div className="flex flex-col items-start gap-2">
          <Button onClick={addBrickAction}>add a brick</Button>
          <BrickSelector />
          <BrickEditor />
        </div>
        <div>
          <PrettyJsonDisplay data={content} />
        </div>
      </div>
      <Notifications />
    </>
  );
}

export default App;
