import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

import PrettyJsonDisplay from "./components/PrettyJsonDisplay";
import { addBrick } from "./redux/content/contentSlice";
import BrickEditor from "./components/BrickEditor";
import BrickSelector from "./components/BrickSelector";
import Button from "./components/Button";
import { v4 as uuidv4 } from "uuid";

function App() {
  const content = useSelector((state: RootState) => state.content.value);
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
  );
}

export default App;
